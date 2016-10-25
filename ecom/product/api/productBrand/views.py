from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from ecom.product.models import ProductBrands
from ecom.include.api import request_get
from mongoengine import NotUniqueError
import json

def productBrand_all(request):
    return request_get(request, ProductBrands.objects.all())

def productBrand_name(request, slug):
    return request_get(request, ProductBrands.objects(slug=slug).first())

@csrf_exempt
def productBrand_create(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body.decode())
            err = ProductBrands.validation(data)
            if len(err) == 0:
                ProductBrands.create_obj(data)
                return HttpResponse('ProductBrand created', status=201)
            else:
                output = ''
                for e in err:
                    output += e + '<br />'
                return HttpResponse(output)

        except ValueError as e:
            return HttpResponse('JSON Decode error', status=400)

        except NotUniqueError as e:
            return HttpResponse('Brand already exist', status=400)
    else:
        return HttpResponse('Method not allowed', status=405)

@csrf_exempt
def productBrand_delete(request):
    if request.method == 'DELETE':
        item = ProductBrands.objects(slug=slug)
        if not item:
            return HttpResponse('This productBrand not exist', status=404)
        item.delete()
        return HttpResponse('ProductBrand removed')
    else:
        return HttpResponse('Method not allowed', status=405)

@csrf_exempt
def productBrand_update(request, slug):
    if request.method == 'PUT':
        try:
            item = ProductBrands.objects(slug=slug)
            if not item:
                return HttpResponse('This productBrand not exist', status=404)

            data = json.loads(request.body.decode())
            if not data:
                return HttpResponse('Data cannot empty', status=400)

            ProductBrands.update_obj(slug, data)
            return HttpResponse('ProductBrand updated')
            
        except ValueError as e:
            return HttpResponse('JSON Decode error', status=400)
    else:
        return HttpResponse('Method not allowed', status=405)
