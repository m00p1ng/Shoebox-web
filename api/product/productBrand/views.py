from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from api.product.models import ProductBrands
from api.include.api import request_get, errors_to_json
from mongoengine import NotUniqueError
import json


@csrf_exempt
def productBrand(request):
    body = request.body
    if request.method == 'GET':
        return request_get(query_all())
    if request.method == 'POST':
        return productBrand_create(body)
    if request.method == 'PUT':
        return HttpResponse('Method not allowed', status=405)
    if request.method == 'DELETE':
        return HttpResponse('Method not allowed', status=405)


@csrf_exempt
def productBrand_with_brand(request, slug):
    body = request.body
    if request.method == 'GET':
        return request_get(query_by_brand(slug))
    if request.method == 'POST':
        return HttpResponse('Method not allowed', status=405)
    if request.method == 'PUT':
        return productBrand_update(body, slug)
    if request.method == 'DELETE':
        return productBrand_delete(slug)


def query_all():
    return ProductBrands.objects.all


def productBrand_name(slug):
    return ProductBrands.objects(slug=slug).first()


def productBrand_create(body):
    try:
        data = json.loads(body.decode())
        err = ProductBrands.validation(data)
        if len(err) == 0:
            ProductBrands.create_obj(data)
            return HttpResponse('ProductBrand created', status=201)
        else:
            return errors_to_json(err)

    except ValueError as e:
        return HttpResponse('JSON Decode error', status=400)

    except NotUniqueError as e:
        return HttpResponse('Brand already exist', status=400)


def productBrand_delete(slug):
    item = ProductBrands.objects(slug=slug)
    if not item:
        return HttpResponse('This productBrand not exist', status=404)
    item.delete()
    return HttpResponse('ProductBrand removed')


def productBrand_update(body, slug):
    try:
        item = ProductBrands.objects(slug=slug)
        if not item:
            return HttpResponse('This productBrand not exist', status=404)

        data = json.loads(body.decode())
        if not data:
            return HttpResponse('Data cannot empty', status=400)

        ProductBrands.update_obj(slug, data)
        return HttpResponse('ProductBrand updated')

    except ValueError as e:
        return HttpResponse('JSON Decode error', status=400)
