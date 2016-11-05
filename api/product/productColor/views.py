from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from api.product.models import ProductColors
from api.include.api import request_get, errors_to_json
from mongoengine import NotUniqueError
import json

json_type = "application/json"

@csrf_exempt
def productColor(request):
    body = request.body
    if request.method == 'GET':
        return request_get(query_all())
    if request.method == 'POST':
        return productColor_create(body)
    if request.method == 'PUT':
        return HttpResponse('Method not allowed', status=405)
    if request.method == 'DELETE':
        return HttpResponse('Method not allowed', status=405)


@csrf_exempt
def productColor_with_color(request, slug):
    body = request.body
    if request.method == 'GET':
        return request_get(query_by_color(slug))
    if request.method == 'POST':
        return HttpResponse('Method not allowed', status=405)
    if request.method == 'PUT':
        return productColor_update(body, slug)
    if request.method == 'DELETE':
        return productColor_delete(slug)


def query_all():
    return ProductColors.objects.all()


def query_by_color(slug):
    return ProductColors.objects(slug=slug).first()


def productColor_name(slug):
    return ProductColors.objects(slug=slug).first()


def productColor_create(body):
    try:
        data = json.loads(body.decode())
        err = ProductColors.validation(data)
        if len(err) == 0:
            ProductColors.create_obj(data)
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
        err['errorMsg'] = ['Color already exist']
        err['created'] = False
        return HttpResponse(json.dumps(err), content_type=json_type, status=400)


def productColor_delete(slug):
    item = ProductColors.objects(slug=slug)
    err = {}
    if not item:
        err['errorMsg'] = ['This productColor not exist']
        err['deleted'] = False
        return HttpResponse(json.dumps(err), content_type=json_type, status=404)
    item.delete()
    message = {'deleted': True}
    return HttpResponse(json.dumps(message), content_type=json_type)


def productColor_update(body, slug):
    try:
        item = ProductColors.objects(slug=slug)
        err = {}
        if not item:
            err['errorMsg'] = ['This productColor not exist']
            err['updated'] = False
            return HttpResponse(json.dumps(err), content_type=json_type, status=404)

        data = json.loads(body.decode())
        if not data:
            err['errorMsg'] = ['Data cannot empty']
            err['updated'] = False
            return HttpResponse(json.dumps(err), content_type=json_type, status=400)

        ProductColors.update_obj(slug, data)

        message = {'updated': True}
        return HttpResponse(json.dumps(message), content_type=json_type)

    except ValueError as e:
        err['errorMsg'] = ['JSON Decode error']
        err['updated'] = False
        return HttpResponse(json.dumps(err), content_type=json_type, status=400)
