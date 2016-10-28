from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from ecom.include.api import request_get
from ecom.suppliers.models import Companies
from mongoengine import NotUniqueError
import json

@csrf_exempt
def company(request):
    body = request.body
    if request.method == 'GET':
        return request_get(query_all())
    if request.method == 'POST':
        return company_create(body)
    if request.method == 'PUT':
        return HttpResponse('Method not allowed', status=405)
    if request.method == 'DELETE':
        return HttpResponse('Method not allowed', status=405)


@csrf_exempt
def company_with_name(request, slug):
    body = request.body
    if request.method == 'GET':
        return request_get(query_by_name(slug))
    if request.method == 'POST':
        return HttpResponse('Method not allowed', status=405)
    if request.method == 'PUT':
        return company_update(body, slug)
    if request.method == 'DELETE':
        return company_delete(slug)


def query_all():
    return Companies.objects.all()


def query_by_name(slug):
    return Companies.objects(slug=slug).first()


def company_create(body):
    try:
        data = json.loads(body.decode())
        err = Companies.validation(data)

        if len(err) == 0:
            Companies.create_obj(data)
            return HttpResponse('Company created', status=201)
        else:
            output = ''
            for e in err:
                output += e + '<br />'
            return HttpResponse(output)

    except ValueError as e:
        return HttpResponse('JSON Decode error',status =400)

    except NotUniqueError as e:
        return HttpResponse('Company already exist', status=400)


def company_delete(slug):
    item = Companies.objects(slug=slug)
    if not item:
        return HttpResponse('This company not exist', status=404)
    item.delete()
    return HttpResponse('Company removed')


def company_update(body, slug):
    try:
        item = Companies.objects(slug=slug)
        if not item:
            return HttpResponse('This company not exist',status=404)

        data = json.loads(body.decode())
        if not data:
            return HttpResponse('Data cannot empty', status=400)

        Companies.update_obj(slug,data)
        return HttpResponse('Company updated')

    except ValueError as e:
        return HttpResponse('JSON Decode error', status=400)
