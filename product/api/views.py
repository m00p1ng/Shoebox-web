from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from product.models import Products
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

def product_size(request, size):
    return request_get(request, Products.objects(size=size))

def product_validation(data):
    err = []
    if 'name' not in data:
        err.append('Product name cannot empty')
    if 'types' not in data:
        err.append('Product types cannot empty')
    if 'description' not in data:
        err.append('Description cannot empty')
    if 'price' not in data:
        err.append('Unit price cannot empty')
    # if 'picture' not in data:
    #     err.append('Picture cannot empty')
    if 'year' not in data:
        err.append('year cannot empty')
    if 'month' not in data:
        err.append('month cannot empty')
    if 'day' not in data:
        err.append('day cannot empty')
    if 'amount' not in data:
        err.append('Amount cannot empty')
    if 'size' not in data:
        err.append('Size cannot empty')
    if 'color' not in data:
        err.append('Color cannot empty')
    if 'available' not in data:
        err.append('Product status cannot empty')
    if 'discountAvailable' not in data:
        err.append('Discount status cannot empty')
    return err

@csrf_exempt
def product_create(request):
    if request.method == 'POST':
        raw_data = request.body.decode()
        err = product_validation(raw_data)
        if len(err) == 0:
            data = json.loads(raw_data)
            Products.objects.create(
                name=data['name'],
                types=data['types'],
                description=data['description'],
                price=data['price'],
                # picture=data['picture'],
                date=datetime.datetime(year=data['year'], month=data['month'], day=data['day']),
                amount=data['amount'],
                size=data['size'],
                color=data['color'],
                available=data['available'],
                discountAvailable=data['discountAvailable'],
                slug=to_slug(data['name'])
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
        data = json.loads(request.body.decode())
        item.update(**data)
        return HttpResponse('Product updated')
    else:
        return HttpResponse('Method not allowed', status=405)
