from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from ecom.product.models import ProductSizes
from ecom.include.api import request_get, errors_to_json
from mongoengine import NotUniqueError
import json


@csrf_exempt
def productSize(request):
    body = request.body
    if request.method == 'GET':
        return request_get(query_all())
    if request.method == 'POST':
        return productSize_create(body)
    if request.method == 'PUT':
        return HttpResponse('Method not allowed', status=405)
    if request.method == 'DELETE':
        return HttpResponse('Method not allowed', status=405)


@csrf_exempt
def productSize_with_size(request, slug):
    body = request.body
    if request.method == 'GET':
        return request_get(query_by_name(slug))
    if request.method == 'POST':
        return HttpResponse('Method not allowed', status=405)
    if request.method == 'PUT':
        return productSize_update(body, slug)
    if request.method == 'DELETE':
        return productSize_delete(slug)


def query_all():
    return ProductSizes.objects.all()


def query_by_name(slug):
    return ProductSizes.objects(slug=slug).first()


def productSize_create(body):
    try:
        data = json.loads(body.decode())
        err = ProductSizes.validation(data)
        if len(err) == 0:
            ProductSizes.create_obj(data)
            return HttpResponse('productSize created', status=201)
        else:
            errors_to_json(err)

    except ValueError as e:
        return HttpResponse('JSON Decode error', status=400)

    except NotUniqueError as e:
        return HttpResponse('Product sizes already exist', status=400)


def productSize_delete(slug):
    item = ProductSizes.objects(slug=slug)
    if not item:
        return HttpResponse('This productSize not exist', status=404)
    item.delete()
    return HttpResponse('productSize removed')


def productSize_update(body, slug):
    try:
        item = ProductSizes.objects(slug=slug)
        if not item:
            return HttpResponse('This productSize not exist', status=404)

        data = json.loads(body.decode())
        if not data:
            return HttpResponse('Data cannot empty', status=400)

        ProductSizes.update_obj(slug, data)
        return HttpResponse('productSize updated')

    except ValueError as e:
        return HttpResponse('JSON Decode error', status=400)
