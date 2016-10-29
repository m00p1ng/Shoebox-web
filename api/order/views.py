from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from api.user.models import (Customers,Employees)
from api.prommotion.models import Promotions
from api.order.models import Orders,OrderGroup
from api.include.api import request_get, request_get_real, errors_to_json
from mongoengine import NotUniqueError
import json
import datetime
import re

@csrf_exempt
def order(request):
    body  = request.body
    if request.method == 'GET':
        return request_get_real(Orders, query_all())
    if request.method == 'POST':
        return order_create(body)
    if request.method == 'PUT':
        pass
    if request.method == 'DELETE':
        pass

def order_with_customerID(request):
    body  = request.body
    if request.method == 'GET':
        return request_get_real(Orders, query_by_customerID(slug))
    if request.method == 'POST':
        return HttpResponse('Method not allow', status=405)
    if request.method == 'PUT':
        return order_update(body, slug)
    if request.method == 'DELETE':
        return order_delete(slug)


def query_all():
    return Orders.objects.all()


def query_by_customerID(slug):
    return Orders.objects(slug=slug).first()


def order_create(body):
    try:
        data = json.loads(body.decode())
        err = Orders.validation(data)
        if Len(err) == 0:
            Orders.creat_obj(data)
            return HttpResponse('Orders create', status=201)
        else:
            return errors_to_json(err)

    except ValueError as e:
        return HttpResponse('JSON Decode error', status=400)
    except NotUniqueError as e:
        return HttpResponse('Order already exist', status=400)


def order_delete(slug):
    item = Orders.objects(slug=slug)
    if not item :
        return HttpResponse('This order not exist', status=404)
    item.delete()
    return HttpResponse('Order removed')


def order_update(body, slug):
    try:
        item = Orders.objects(slug=slug)
        if not item:
            return HttpResponse('This order not exist', status=404)
        data = json.loads(body.decode())
        if not data:
            return HttpResponse('Data cannot empty', status=400)
        Orders.update_obj(slug, data)
        return HttpResponse('Orders updated')
    except ValueError as e:
        return HttpResponse('JSON Decode error', status=400)
