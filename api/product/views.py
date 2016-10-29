from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from api.product.models import *
from api.include.api import request_get, request_get_real, errors_to_json
from mongoengine import NotUniqueError
import json


@csrf_exempt
def product(request):
    body = request.body
    if request.method == 'GET':
        return request_get_real(Products, query_all())
    if request.method == 'POST':
        return product_create(body)
    if request.method == 'PUT':
        pass
    if request.method == 'DELETE':
        pass


@csrf_exempt
def product_with_name(request, slug):
    body = request.body
    if request.method == 'GET':
        return request_get_real(Products, query_by_name(slug))
    if request.method == 'POST':
        return HttpResponse('Method not allowed', status=405)
    if request.method == 'PUT':
        return product_update(body, slug)
    if request.method == 'DELETE':
        return product_delete(slug)


@csrf_exempt
def product_search(request, search, slug):
    body = request.body
    if request.method == 'GET':
        if search == 'type':
            return product_type(slug)
        if search == 'brand':
            return product_brand(slug)
        if search == 'size':
            return product_size(slug)
        if search == 'color':
            return product_color(slug)
    if request.method == 'POST':
        pass
    if request.method == 'PUT':
        pass
    if request.method == 'DELETE':
        pass


def query_all():
    return Products.objects.all()


def query_by_name(slug):
    return Products.objects(slug=slug).first()


def product_type(slug):
    types = ProductTypes.objects(slug=slug).first()
    if not types:
        return HttpResponse('Not found', status=404)
    product = Products.objects(types=types.id)
    return request_get_real(Products, product)


def product_brand(slug):
    brand = ProductBrands.objects(slug=slug).first()
    if not brand:
        return HttpResponse('Not found', status=404)
    product = Products.objects(brand=brand.id)
    return request_get_real(Products, product)


def product_size(slug):
    size = ProductSizes.objects(slug=slug).first()
    if not size:
        return HttpResponse('Not found', status=404)
    product = Products.objects(size=size.id)
    return request_get_real(Products, product)


def product_color(slug):
    color = ProductColors.objects(slug=slug).first()
    if not color:
        return HttpResponse('Not found', status=404)
    product = Products.objects(color=color.id)
    return request_get_real(Products, product)


def product_create(body):
    try:
        data = json.loads(body.decode())
        err = Products.validation(data)

        if len(err) == 0:
            Products.create_obj(data)
            return HttpResponse('Product created', status=201)
        else:
            return errors_to_json(err)

    except ValueError as e:
        return HttpResponse('JSON Decode error', status=400)

    except NotUniqueError as e:
        return HttpResponse('Product already exist', status=400)


def product_delete(slug):
    item = Products.objects(slug=slug)
    if not item:
        return HttpResponse('This product not exist', status=404)
    item.delete()
    return HttpResponse('Product removed')


def product_update(body, slug):
    try:
        item = Products.objects(slug=slug)
        if not item:
            return HttpResponse('This product not exist', status=404)

        data = json.loads(body.decode())
        if not data:
            return HttpResponse('Data cannot empty', status=400)

        Products.update_obj(slug, data)
        return HttpResponse('Product updated')

    except ValueError as e:
        return HttpResponse('JSON Decode error', status=400)