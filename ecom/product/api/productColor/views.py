from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from ecom.product.models import ProductColors
from ecom.include.api import request_get
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


@csrf_exempt
def productColor_create(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body.decode())
            err = ProductColors.validation(data)
            if len(err) == 0:
                ProductColors.create_obj(data)
                return HttpResponse('productColor created', status=201)
            else:
                output = ''
                for e in err:
                    output += e + '<br />'
                return HttpResponse(output)

        except ValueError as e:
            return HttpResponse('JSON Decode error', status=400)

        except NotUniqueError as e:
            return HttpResponse('Product color already exist', status=400)
    else:
        return HttpResponse('Method not allowed', status=405)

@csrf_exempt
def productColor_delete(request):
    if request.method == 'DELETE':
        item = ProductColors.objects(slug=slug)
        if not item:
            return HttpResponse('This productColor not exist', status=404)
        item.delete()
        return HttpResponse('productColor removed')
    else:
        return HttpResponse('Method not allowed', status=405)

@csrf_exempt
def productColor_update(request, slug):
    if request.method == 'PUT':
        try:
            item = ProductColors.objects(slug=slug)
            if not item:
                return HttpResponse('This productColor not exist', status=404)

            data = json.loads(request.body.decode())
            if not data:
                return HttpResponse('Data cannot empty', status=400)

            ProductColors.update_obj(data)
            return HttpResponse('productColor updated')

        except ValueError as e:
            return HttpResponse('JSON Decode error', status=400)
    else:
        return HttpResponse('Method not allowed', status=405)
