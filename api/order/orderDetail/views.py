from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from api.order.models import *
from api.include.api import request_get, request_get_real, errors_to_json
from mongoengine import NotUniqueError
import json
import datetime
import re

@csrf_exempt
def orderDetail(request):
    body  = request.body
    if request.method == 'GET':
        return request_get_real(OrderDetails,query_all())
    if request.method == 'POST':
        return orderDetail_create(body)
    if request.method == 'PUT':
        pass
    if request.method == 'DELETE':
        pass

@csrf_exempt
def orderDetail_with_id(request,oid):
    body  = request.body
    if request.method == 'GET':
        return request_get(OrderDetails,query_by_id(oid))
    if request.method == 'POST':
        return HttpResponse('Method not allow', status=405)
    if request.method == 'PUT':
        pass
    if request.method == 'DELETE':
        return orderDetail_delete(oid)


def query_all():
    return OrderDetails.objects.all()


def query_by_id(oid):
    return OrderDetails.objects(pk=oid).first()


def orderDetail_create(body):
    try:
        data = json.loads(body.decode())
        err = OrderDetails.validation(data)
        if len(err) == 0:
            OrderDetails.create_obj(data)
            return HttpResponse('OrderDetail created', status=201)
        else:
            return errors_to_json(err)

    except ValueError as e:
        return HttpResponse('JSON Decode error', status=400)
    except NotUniqueError as e:
        return HttpResponse('OrderDetail already exist', status=400)

def orderDetail_delete(oid):
    orderDetailDetails = OrderDetails.objects(pk=oid)
    if not orderDetailDetails:
        return HttpResponse('This OrderDetail not exist', status=404)

    return HttpResponse('OrderDetail removed')
