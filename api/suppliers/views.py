from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from api.include.api import request_get, request_get_real, errors_to_json
from api.suppliers.models import *
from mongoengine import NotUniqueError
import json

@csrf_exempt
def supplier(request):
    body = request.body
    if request.method == 'GET':
        return request_get_real(Suppliers, query_all())
    if request.method == 'POST':
        return supplier_create(body)
    if request.method == 'PUT':
        pass
    if request.method == 'DELETE':
        pass


@csrf_exempt
def supplier_with_name(request, slug):
    body = request.body
    if request.method == 'GET':
        return request_get_real(Suppliers, query_by_name(slug))
    if request.method == 'POST':
        return HttpResponse('Method not allowed', status=405)
    if request.method == 'PUT':
        return supplier_update(body, slug)
    if request.method == 'DELETE':
        print(slug)
        return supplier_delete(slug)

def query_all():
    return Suppliers.objects.all()


def query_by_name(slug):
    return Suppliers.objects(slug=slug).first()


def supplier_company(company):
    company = Companies.objects(name=company).first()
    if not company:
        return HttpResponse('Not found', status=404)
    supplier = Suppliers.objects(company=company.id)
    return request_get_real(Suppliers, supplier)


def supplier_create(body):
    try:
        data = json.loads(body.decode())
        err = Suppliers.validation(data)

        if len(err) == 0:
            Suppliers.create_obj(data)
            return HttpResponse('Supplier created', status=201)
        else:
            return errors_to_json(err)

    except ValueError as e:
        return HttpResponse('JSON Decode error', status=400)

    except NotUniqueError as e:
        return HttpResponse('Supplier already exist', status=400)


def supplier_delete(slug):
    print(slug)
    item = Suppliers.objects(slug=slug)
    if not item:
        return HttpResponse('This supplier not exist', status=404)
    item.delete()
    return HttpResponse('Supplier removed')


def supplier_update(body, slug):
    try:
        item = Suppliers.objects(slug=slug)
        if not item:
            return HttpResponse('This supplier not exist', status=404)

        data = json.loads(body.decode())
        if not data:
            return HttpResponse('Data cannot empty', status=400)

        Suppliers.update_obj(slug, data)
        return HttpResponse('Supplier updated')

    except ValueError as e:
        return HttpResponse('JSON Decode error', status=400)
