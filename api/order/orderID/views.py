from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from api.order.models import OrderIDs
from api.include.api import request_get
import json

json_type = "application/json"

@csrf_exempt
def orderID(request):
    body = request.body
    if request.method == 'GET':
        return request_get(query())
    if request.method == 'POST':
        return orderID_create()
    if request.method == 'PUT':
        return orderID_update()
    if request.method == 'DELETE':
        return orderID_delete()


def query():
    return OrderIDs.objects.all()


def orderID_create():
    if OrderIDs.objects.all().first() is None:
        OrderIDs.create_obj()
        message = {'created': True}
        return HttpResponse(json.dumps(message), content_type=json_type, status=201)
    else:
        err = {}
        err['errorMsg'] = ['This database can have only one orderID counter']
        err['created'] = False
        return HttpResponse(json.dumps(err), content_type=json_type, status=400)


def orderID_delete():
    item = OrderIDs.objects.all().first()
    err = {}
    if not item:
        err['errorMsg'] = ['This orderID not exist']
        err['deleted'] = False
        return HttpResponse(json.dumps(err), content_type=json_type, status=404)
    item.delete()
    message = {'deleted': True}
    return HttpResponse(json.dumps(message), content_type=json_type)


def orderID_update():
    item = OrderIDs.objects.all().first()
    err = {}
    if not item:
        err['errorMsg'] = ['This orderID not exist']
        err['updated'] = False
        return HttpResponse(json.dumps(err), content_type=json_type, status=404)
    item.update_obj()
    message = {'updated': True}
    return HttpResponse(json.dumps(message), content_type=json_type)

