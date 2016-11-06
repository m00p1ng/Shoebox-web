from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from api.product.models import ProductTypes
from api.include.api import request_get, errors_to_json
from mongoengine import NotUniqueError
import json

json_type = "application/json"

@csrf_exempt
def productType(request):
    body = request.body
    if request.method == 'GET':
        return request_get(query_all())
    if request.method == 'POST':
        return productType_create(body)
    if request.method == 'PUT':
        return HttpResponse('Method not allowed', status=405)
    if request.method == 'DELETE':
        return HttpResponse('Method not allowed', status=405)


@csrf_exempt
def productType_with_name(request, slug):
    body = request.body
    if request.method == 'GET':
        return request_get(query_by_name(slug))
    if request.method == 'POST':
        return HttpResponse('Method not allowed', status=405)
    if request.method == 'PUT':
        return productType_update(body, slug)
    if request.method == 'DELETE':
        return productType_delete(slug)


def query_all():
    return ProductTypes.objects.all()


def query_by_name(slug):
    return ProductTypes.objects(slug=slug).first()


def productType_create(body):
    try:
        data = json.loads(body.decode())
        err = ProductTypes.validation(data)
        if len(err) == 0:
            ProductTypes.create_obj(data)
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
        err['errorMsg'] = ['Type already exist']
        err['created'] = False
        return HttpResponse(json.dumps(err), content_type=json_type, status=400)


def productType_delete(slug):
    item = ProductTypes.objects(slug=slug)
    err = {}
    if not item:
        err['errorMsg'] = ['This productType not exist']
        err['deleted'] = False
        return HttpResponse(json.dumps(err), content_type=json_type, status=404)
    item.delete()
    message = {'deleted': True}
    return HttpResponse(json.dumps(message), content_type=json_type)


def productType_update(body, slug):
    try:
        item = ProductTypes.objects(slug=slug)
        err = {}
        if not item:
            err['errorMsg'] = ['This productType not exist']
            err['updated'] = False
            return HttpResponse(json.dumps(err), content_type=json_type, status=404)

        data = json.loads(body.decode())
        if not data:
            err['errorMsg'] = ['Data cannot empty']
            err['updated'] = False
            return HttpResponse(json.dumps(err), content_type=json_type, status=400)

        ProductTypes.update_obj(slug, data)

        message = {'updated': True}
        return HttpResponse(json.dumps(message), content_type=json_type)

    except ValueError as e:
        err['errorMsg'] = ['JSON Decode error']
        err['updated'] = False
        return HttpResponse(json.dumps(err), content_type=json_type, status=400)
