from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from ecom.include.api import request_get
from ecom.suppliers.models import *
from mongoengine import NotUniqueError
import json

def supplier_all(request):
    return request_get(request, Suppliers.objects.all())

def supplier_companyName(request, username):
    return request_get(request, Suppliers.objects(slug=slug).first())

@csrf_exempt
def supplier_create(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body.decode())
            err = Suppliers.validation(data)

            if len(err) == 0:
                Suppliers.create_obj(data)
                return HttpResponse('Supplier created', status=201)
            else:
                output = ''
                for e in err:
                    output += e + '<br />'
                return HttpResponse(output)

        except ValueError as e:
            return HttpResponse('JSON Decode error', status=400)

        except NotUniqueError as e:
            return HttpResponse('Supplier already exist', status=400)
    else:
        return HttpResponse('Method not allowed', status=405)

@csrf_exempt
def supplier_delete(request, slug):
    if request.method == 'DELETE':
        item = Suppliers.objects(slug=slug)
        if not item:
            return HttpResponse('This supplier not exist', status=404)
        return HttpResponse('Supplier removed')
    else:
        return HttpResponse('Method not allowed', status=405)

@csrf_exempt
def supplier_update(request, slug):
    if request.method == 'PUT':
        try:
            item = Suppliers.objects(slug=slug)
            if not item:
                return HttpResponse('This supplier not exist', status=404)

            data = json.loads(request.body.decode())
            if not data:
                return HttpResponse('Data cannot empty', status=400)

            Suppliers.update_obj(slug, data)
            return HttpResponse('Supplier updated')

        except ValueError as e:
            return HttpResponse('JSON Decode error', status=400)
    else:
        return HttpResponse('Method not allowed', status=405)



