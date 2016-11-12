from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from api.order.models import *
from api.include.api import request_get, errors_to_json
from mongoengine import NotUniqueError
import json

json_type = "application/json"

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
def order_with_id(request,oid):
    body  = request.body
    if request.method == 'GET':
        return request_get(query_by_id(oid))
    if request.method == 'POST':
        return HttpResponse('Method not allow', status=405)
    if request.method == 'PUT':
        return order_update(body,oid)
    if request.method == 'DELETE':
        return order_delete(oid)


def query_all():
    return Orders.objects.all()


def query_by_id(oid):
    return Orders.objects(orderID=oid).first()


def order_create(body):
    try:
        data = json.loads(body.decode())
        err = Orders.validation(data)
        if len(err) == 0:
            Orders.create_obj(data)
            message = {'created' : True}
            return HttpResponse(json.dumps(message), content_type=json_type, status=201)
        else:
            return errors_to_json(err, 'created')

    except ValueError as e:
        err = {}
        err['errorMsg'] = ['JSON Decode error']
        err['created'] = False
        return HttpResponse(json.dumps(err), content_type=json_type, status =400)

    except NotUniqueError as e:
        err = {}
        err['errorMsg'] = ['Order already exist']
        err['created'] = False
        return HttpResponse(json.dumps(err), content_type=json_type, status =400)


def order_delete(oid):
    item = Orders.objects(orderID=oid)
    err = {}
    if not item:
        err['errorMsg'] = ['This order not exist']
        err['deleted'] = False
        return HttpResponse(json.dumps(err), content_type=json_type, status =404)
    item.delete()
    message = {'deleted' : True}
    return HttpResponse(json.dumps(message), content_type=json_type)


def order_update(body, oid):
    try:
        item = Orders.objects(orderID=oid)
        err = {}
        if not item:
            err['errorMsg'] = ['This order not exist']
            err['updated'] = False
            return HttpResponse(json.dumps(err), content_type=json_type, status =404)

        data = json.loads(body.decode())
        if not data:
            err['errorMsg'] = ['Data cannot empty']
            err['updated'] = False
            return HttpResponse(json.dumps(err), content_type=json_type, status =400)

        Orders.update_obj(oid,data)

        message = {'updated' : True}
        return HttpResponse(json.dumps(message), content_type=json_type)

    except ValueError as e:
        err['errorMsg'] = ['JSON Decode error']
        err['updated'] = False
        return HttpResponse(json.dumps(err), content_type=json_type, status =400)
