from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from ecom.supplier.models import Suppliers
import json
import datetime
import re


def request_from(request, data):
    if request.method == 'GET':
        if not data:
            return HttpResponse('Not found', status=404)
        return HttpResponse(data.to_json(), content_type="application/json")
    else:
        return HttpResponse('Method not allowed', status=405)

def supplier_all(request):
    return request_from(request, Suppliers.objects.all())

def supplier_companyName(request, slug):
    return request_from(request, Suppliers.objects(slug=slug))

def supplier_validation(data):
    err = []
    if 'companyName' not in data:
        err.append('Company name cannot empty')
    if 'contactFirstname' not in data:
        err.append('Contact firstname cannot empty')
    if 'contactLastname' not in data:
        err.append('Contact lastname cannot empty')
    if 'contactTitle' not in data:
        err.append('Contact title name cannot empty')
    if 'city' not in data:
        err.append('City cannot empty')
    if 'district' not in data:
        err.append('District cannot empty')
    if 'street' not in data:
        err.append('Street cannot empty')
    if 'zipcode' not in data:
        err.append('Zipcode cannot empty')
    if 'phone' not in data:
        err.append('Phone number cannot empty')
    if 'email' not in data:
        err.append('Email cannot empty')
    return err

def to_slug(string):
    string = re.sub(r"[^\w\s]", '', string)
    string = re.sub(r"\s+", '-', string)
    return string.lower()

@csrf_exempt
def supplier_create(request):
    if request.method == 'POST':
        raw_data = request.body.decode()
        err = supplier_validation(raw_data)
        if len(err) == 0:
            data = json.loads(raw_data)
            Suppliers.objects.create(
                companyName=data['companyName'],
                contactFirstname=data['contactFirstname'],
                contactLastname=data['contactLastname'],
                contactTitle=data['contactTitle'],
                city=data['city'],
                district=data['district'],
                street=data['street'],
                zipcode=data['zipcode'],
                phone=data['phone'],
                email=data['email'],
                slug=to_slug(data['companyName'])
            )
            return HttpResponse('Supplier created', status=201)
        else:
            output = ''
            for e in err:
                output += e + '<br />'
            return HttpResponse(output)
    else:
        return HttpResponse('Method not allowed', status=405)

@csrf_exempt
def supplier_delete(request, slug):
    if request.method == 'DELETE':
        item = Suppliers.objects(slug=slug)
        if not item:
            return HttpResponse('This supplier not exist', status=404)
        item.delete()
        return HttpResponse('Supplier removed')
    else:
        return HttpResponse('Method not allowed', status=405)

@csrf_exempt
def supplier_update(request, slug):
    if request.method == 'PUT':
        item = Products.objects(slug=slug)

        if not item:
            return HttpResponse('This supplier not exist', status=404)
        if not request.body:
            return HttpResponse('Request cannot empty', status=400)

        data = json.loads(request.body.decode())
        if not data:
            return HttpResponse('Data cannot empty', status=400)

        if 'companyName' in data:
            data['slug'] = to_slug(data['companyName'])

        item.update(**data)
        return HttpResponse('Suppliers updated')
    else:
        return HttpResponse('Method not allowed', status=405)


