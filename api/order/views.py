from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from api.user.models import customer
from api.order.models import *
from api.include.api import request_get, errors_to_json
from mongoengine import NotUniqueError
import json
import datetime
import re

@csrf_exempt
def order(request):
    body  = request.body
    if request.method == 'GET':
        return request_get(query_all())
    if request.method == 'POST':
        return order_create(body)
    if request.method == 'PUT':
        pass
    if request.method == 'DELETE':
        pass

@csrf_exempt
def order_with_id(request,cid):
    body  = request.body
    if request.method == 'GET':
        return request_get(query_by_id(cid))
    if request.method == 'POST':
        return HttpResponse('Method not allow', status=405)
    if request.method == 'PUT':
        return order_update(body,cid)
    if request.method == 'DELETE':
        return order_delete(cid)


def query_all():
    return Orders.objects.all()


def query_by_id(cid):
    return Orders.objects(pk=cid).first()


def order_create(body):
    try:
        data = json.loads(body.decode())
        err = Orders.validation(data)
        if len(err) == 0:
            Orders.create_obj(data)
            return HttpResponse('Order created', status=201)
        else:
            return errors_to_json(err)

    except ValueError as e:
        return HttpResponse('JSON Decode error', status=400)
    except NotUniqueError as e:
        return HttpResponse('Order already exist', status=400)


def order_update(body, cid):
    try:
        item = Orders.objects(pk=cid)
        if not item:
            return HttpResponse('This order not exist', status=404)

        data = json.loads(body.decode())
        if not data:
            return HttpResponse('Data cannot empty', status=400)

        Orders.update_obj(cid, data)
        return HttpResponse('Order updated')

    except ValueError as e:
        return HttpResponse('JSON Decode error', status=400)


def order_delete(cid):
    order = Orders.objects(pk=cid)
    if not order :
        return HttpResponse('This order not exist', status=404)
    order.delete()

    # orderDetails = OrderDetails.objects(slug=slug)
    # if not orderDetails:
    #     return HttpResponse('This orderDetail not exist', status=404)
    # for orderDetail in orderDetails:
    #     orderDetail.delete()

    return HttpResponse('Order removed')
