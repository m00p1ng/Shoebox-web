from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from api.product.models import ProductColors
from api.include.api import request_get, errors_to_json
from mongoengine import NotUniqueError
import json


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
def productColor_with_name(request, slug):
    body = request.body
    if request.method == 'GET':
        return request_get(query_by_name(slug))
    if request.method == 'POST':
        return HttpResponse('Method not allowed', status=405)
    if request.method == 'PUT':
        return productColor_update(body, slug)
    if request.method == 'DELETE':
        return productColor_delete(slug)


def productColor_all():
    return ProductColors.objects.all()


def productColor_name(slug):
    return ProductColors.objects(slug=slug).first()


def productColor_create(body):
    try:
        data = json.loads(body.decode())
        err = ProductColors.validation(data)
        if len(err) == 0:
            ProductColors.create_obj(data)
            return HttpResponse('productColor created', status=201)
        else:
            return errors_to_json(err)

    except ValueError as e:
        return HttpResponse('JSON Decode error', status=400)

    except NotUniqueError as e:
        return HttpResponse('Product color already exist', status=400)


def productColor_delete(slug):
    item = ProductColors.objects(slug=slug)
    if not item:
        return HttpResponse('This productColor not exist', status=404)
    item.delete()
    return HttpResponse('productColor removed')


def productColor_update(body, slug):
    try:
        item = ProductColors.objects(slug=slug)
        if not item:
            return HttpResponse('This productColor not exist', status=404)

        data = json.loads(body.decode())
        if not data:
            return HttpResponse('Data cannot empty', status=400)

        ProductColors.update_obj(slug, data)
        return HttpResponse('productColor updated')

    except ValueError as e:
        return HttpResponse('JSON Decode error', status=400)
