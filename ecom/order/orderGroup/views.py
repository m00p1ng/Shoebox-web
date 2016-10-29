from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from ecom.user.models import (Customers,Employees)
from ecom.product.models import Products
from ecom.order.models import Orders,OrderGroup
import json
import datetime
import re


def request_get(request, data):
    if request.method == 'GET':
        if not data:
            return HttpResponse('Not found', status=404)
        return HttpResponse(data.to_json(), content_type="application/json")
    else:
        return HttpResponse('Method not allowed', status=405)

def to_slug(string):
    string = re.sub(r"[^\w\s]", '', string)
    string = re.sub(r"\s+", '-', string)
    return string.lower()

def product_all(request):
    return request_get(request, Products.objects.all())

def product_name(request, slug):
    return request_get(request, Products.objects(slug=slug))

def product_validation(data):
    err = []
    if 'name' not in data:
        err.append('Name cannot empty')
    if 'brand' not in data:
        err.append('Brand cannot empty')
    if 'types' not in data:
        err.append('Types cannot empty')
    if 'description' not in data:
        err.append('Description cannot empty')
    if 'price' not in data:
        err.append('Price cannot empty')
    if 'picture' not in data:
        err.append('Picture cannot empty')
    if 'date' not in data:
        err.append('Date cannot empty')
    if 'amount' not in data:
        err.append('Amount cannot empty')
    if 'size' not in data:
        err.append('Size cannot empty')
    if 'color' not in data:
        err.append('Color cannot empty')
    if 'is_available' not in data:
        err.append('is_available cannot empty')
    if 'is_discount' not in data:
        err.append('is_discount cannot empty')
    if 'discountPercent' not in data:
        err.append('discountPercent cannot empty')
    return err

def get_id_from_field(data):
    field_id = {}
    brand = ProductBrands.objects(slug=data['brand']).first().id
    types = ProductTypes.objects(slug=data['types']).first().id
    colors = []
    sizes = []
    for color in data['color']:
        colors.append(ProductColors.objects(slug=color).first().id)
    for size in data['size']:
        sizes.append(ProductSizes.objects(slug=size).first().id)
    field_id['brand'] = brand
    field_id['types'] = types
    field_id['color'] = colors
    field_id['size'] = sizes
    return field_id

@csrf_exempt
def product_create(request):
    if request.method == 'POST':
        data = json.loads(request.body.decode())
        err = product_validation(data)
        if len(err) == 0:
            field_id = get_id_from_field(data)
            product = Products.objects.create(
                # supplierID=data['supplierID'],
                name=data['name'],
                description=data['description'],
                price=data['price'],
                picture=data['picture'],
                date=datetime.datetime(
                    year=data['date']['year'],
                    month=data['date']['month'],
                    day=data['date']['day']
                ),
                amount=data['amount'],
                is_available=data['is_available'],
                is_discount=data['is_discount'],
                discountPercent=data['discountPercent'],
                slug=to_slug(data['name']),
                productBrandID=field_id['brand'],
                productTypeID=field_id['types'],
                productColorID=field_id['color'],
                proudctSizeID=field_id['size']
            )
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
        if 'date' in data:
            data['date'] = datetime.datetime(
                                year=data['date']['year'],
                                month=data['date']['month'],
                                day=data['date']['day']
                            )
        if 'name' in data:
            data['slug'] = to_slug(data['name'])

        item.update(**data)
        return HttpResponse('Product updated')
    else:
        return HttpResponse('Method not allowed', status=405)
