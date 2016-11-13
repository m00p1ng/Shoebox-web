from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from api.order.models import *
from api.include.api import request_get, request_get_real, errors_to_json
from mongoengine import NotUniqueError
import json
import datetime
import re

json_type = "application/json"

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
def orderDetail_with_orderNumber(request,orderNumber):
    body  = request.body
    if request.method == 'GET':
        return request_get_real(OrderDetails,query_by_number(orderNumber))
    if request.method == 'POST':
        return HttpResponse('Method not allow', status=405)
    if request.method == 'PUT':
        return orderDetail_update(body,orderNumber)
    if request.method == 'DELETE':
        return orderDetail_delete(orderNumber)


def query_all():
    return OrderDetails.objects.all()


def query_by_number(orderNumber):
    return OrderDetails.objects(orderNumber=orderNumber).first()


def orderDetail_create(body):
    try:
        data = json.loads(body.decode())
        err = OrderDetails.validation(data)
        if len(err) == 0:
            OrderDetails.create_obj(data)
            message = {'created': True}
            return HttpResponse(json.dumps(message), content_type=json_type, status=201)
        else:
            return errors_to_json(err, 'created')

    except ValueError as e:
        err = {}
        err['errorMsg'] = ['JSON Decode error']
        err['created'] = False
        return HttpResponse(json.dumps(err), content_type=json_type, status=400)

    except NotUniqueError as e:
        err = {}
        err['errorMsg'] = ['OrderDetail already exist']
        err['created'] = False
        return HttpResponse(json.dumps(err), content_type=json_type, status=400)


def orderDetail_delete(orderNumber):
    item = OrderDetails.objects(orderNumber=orderNumber)
    err = {}
    if not item:
        err['errorMsg'] = ['This orderDetail not exist']
        err['deleted'] = False
        return HttpResponse(json.dumps(err), content_type=json_type, status=404)
    item.delete()
    message = {'deleted': True}
    return HttpResponse(json.dumps(message), content_type=json_type)


def orderDetail_update(body, orderNumber):
    try:
        item = OrderDetails.objects(orderNumber=orderNumber)
        err = {}
        if not item:
            err['errorMsg'] = ['This orderDetail not exist']
            err['updated'] = False
            return HttpResponse(json.dumps(err), content_type=json_type, status =404)

        data = json.loads(body.decode())
        if not data:
            err['errorMsg'] = ['Data cannot empty']
            err['updated'] = False
            return HttpResponse(json.dumps(err), content_type=json_type, status =400)

        OrderDetails.update_obj(orderNumber,data)

        message = {'updated' : True}
        return HttpResponse(json.dumps(message), content_type=json_type)

    except ValueError as e:
        err['errorMsg'] = ['JSON Decode error']
        err['updated'] = False
        return HttpResponse(json.dumps(err), content_type=json_type, status =400)
