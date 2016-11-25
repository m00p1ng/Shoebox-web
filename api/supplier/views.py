from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from api.supplier.models import Suppliers
from api.include.api import request_get, errors_to_json, request_get_to_json, get_page_data
from mongoengine import NotUniqueError
import json
import math

json_type = "application/json"

@csrf_exempt
def supplier(request):
    body = request.body
    if request.method == 'GET':
        return supplier_list(request)
    if request.method == 'POST':
        return supplier_create(body)
    if request.method == 'PUT':
        return HttpResponse('Method not allowed', status=405)
    if request.method == 'DELETE':
        return HttpResponse('Method not allowed', status=405)


@csrf_exempt
def supplier_with_name(request, slug):
    body = request.body
    if request.method == 'GET':
        return request_get(query_by_name(slug))
    if request.method == 'POST':
        return HttpResponse('Method not allowed', status=405)
    if request.method == 'PUT':
        return supplier_update(body, slug)
    if request.method == 'DELETE':
        return supplier_delete(slug)


def query_all():
    return Suppliers.objects.all()


def query_by_name(slug):
    return Suppliers.objects(slug=slug).first()


def supplier_list(request):
    data = get_page_data(request)

    supplier = Suppliers.objects.skip(data['offset']).limit(int(data['result']))

    if data['is_result'] is False and data['is_page'] is False:
        supplier = Suppliers.objects.all()

    if not supplier:
        return HttpResponse('Not found', status=404)
    return request_get_to_json(Suppliers, supplier, data)


def supplier_create(body):
    try:
        data = json.loads(body.decode())
        err = Suppliers.validation(data)
        if len(err) == 0:
            Suppliers.create_obj(data)
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
        err['errorMsg'] = ['Supplier already exist']
        err['created'] = False
        return HttpResponse(json.dumps(err), content_type=json_type, status=400)


def supplier_delete(slug):
    item = Suppliers.objects(slug=slug)
    err = {}
    if not item:
        err['errorMsg'] = ['This supplier not exist']
        err['deleted'] = False
        return HttpResponse(json.dumps(err), content_type=json_type, status=404)
    item.delete()
    message = {'deleted': True}
    return HttpResponse(json.dumps(message), content_type=json_type)


def supplier_update(body, slug):
    try:
        item = Suppliers.objects(slug=slug)
        err = {}
        if not item:
            err['errorMsg'] = ['This supplier not exist']
            err['updated'] = False
            return HttpResponse(json.dumps(err), content_type=json_type, status=404)

        data = json.loads(body.decode())
        if not data:
            err['errorMsg'] = ['Data cannot empty']
            err['updated'] = False
            return HttpResponse(json.dumps(err), content_type=json_type, status=400)

        Suppliers.update_obj(slug, data)

        message = {'updated': True}
        return HttpResponse(json.dumps(message), content_type=json_type)

    except ValueError as e:
        err['errorMsg'] = ['JSON Decode error']
        err['updated'] = False
        return HttpResponse(json.dumps(err), content_type=json_type, status=400)
