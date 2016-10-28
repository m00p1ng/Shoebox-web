from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from ecom.product.models import ProductTypes
from ecom.include.api import request_get
from mongoengine import NotUniqueError
import json


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
            return HttpResponse('productType created', status=201)
        else:
            output = ''
            for e in err:
                output += e + '<br />'
            return HttpResponse(output)

    except ValueError as e:
        return HttpResponse('JSON Decode error', status=400)

    except NotUniqueError as e:
        return HttpResponse('product type already exist', status=400)


def productType_delete(slug):
    item = ProductTypes.objects(slug=slug)
    if not item:
        return HttpResponse('This productType not exist', status=404)
    item.delete()
    return HttpResponse('productType removed')


def productType_update(body, slug):
    try:
        item = ProductTypes.objects(slug=slug)
        if not item:
            return HttpResponse('This productType not exist', status=404)

        data = json.loads(body.decode())
        if not data:
            return HttpResponse('Data cannot empty', status=400)

        ProductTypes.update_obj(slug, data)
        return HttpResponse('productType updated')

    except ValueError as e:
        return HttpResponse('JSON Decode error', status=400)
