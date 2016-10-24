from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from ecom.product.models import *
from ecom.product.api.productType import *
from ecom.product.api.productBrand import *
from ecom.product.api.productSize import *
from ecom.product.api.productColor import *
from ecom.include.api import request_get
import json

def product_all(request):
    return request_get(request, Products.objects.all())

def product_name(request, slug):
    return request_get(request, Products.objects(slug=slug))

def product_type(request, slug):
    types = ProductTypes.objects(slug=slug).first()
    if not types:
        return HttpResponse('Not found', status=404)
    product = Products.objects(types=types.id)
    return request_get(request, product)

def product_brand(request, slug):
    brand = ProductBrands.objects(slug=slug).first()
    if not brand:
        return HttpResponse('Not found', status=404)
    product = Products.objects(brand=brand.id)
    return request_get(request, product)

def product_size(request, slug):
    size = ProductSizes.objects(slug=slug).first()
    if not size:
        return HttpResponse('Not found', status=404)
    product = Products.objects(size=size.id)
    return request_get(request, product)

def product_color(request, slug):
    color = ProductColors.objects(slug=slug).first()
    if not color:
        return HttpResponse('Not found', status=404)
    product = Products.objects(color=color.id)
    return request_get(request, product)

@csrf_exempt
def product_create(request):
    if request.method == 'POST':
        if not request.body:
            return HttpResponse('Request cannot empty', status=400)

        data = json.loads(request.body.decode())
        err = Products.validation(data)

        if len(err) == 0:
            Products.create_obj(data)
            return HttpResponse('Product created', status=201)
        else:
            output = ''
            for e in err:
                output += e + '<br />'
            return HttpResponse(output)
    else:
        return HttpResponse('Method not allowed', status=405)

@csrf_exempt
def product_delete(request, slug):
    if request.method == 'DELETE':
        item = Products.objects(slug=slug)
        if not item:
            return HttpResponse('This product not exist', status=404)
        item.delete()
        return HttpResponse('Product removed')
    else:
        return HttpResponse('Method not allowed', status=405)

@csrf_exempt
def product_update(request, slug):
    if request.method == 'PUT':
        item = Products.objects(slug=slug)

        if not item:
            return HttpResponse('This product not exist', status=404)
        if not request.body:
            return HttpResponse('Request cannot empty', status=400)

        data = json.loads(request.body.decode())
        if not data:
            return HttpResponse('Data cannot empty', status=400)

        Products.update_obj(slug, data)
        return HttpResponse('Product updated')
    else:
        return HttpResponse('Method not allowed', status=405)
