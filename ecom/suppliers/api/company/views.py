from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from ecom.include.api import request_get
from ecom.suppliers.models import Companies
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
def company_with_name(request, companyName):
    body = request.body
    if request.method == 'GET':
        return request_get(query_by_name(companyName))
    if request.method == 'POST':
        return HttpResponse('Method not allowed', status=405)
    if request.method == 'PUT':
        return company_update(body, companyName)
    if request.method == 'DELETE':
        return company_delete(companyName)


def query_all():
    return Companies.objects.all()


def query_by_name(companyName):
    return Companies.objects(companyName=companyName).first()


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


def company_delete(companyName):
    item = Companies.objects(companyName=slug)
    if not item:
        return HttpResponse('This company not exist', status=404)
    item.delete()
    return HttpResponse('Company removed')


def company_update(body, companyName):
    try:
        item = Companies.objects(companyName=slug)
        if not item:
            return HttpResponse('This company not exist',status=404)

        data = json.loads(body.decode())
        if not data:
            return HttpResponse('Data cannot empty', status=400)

        Companies.update_obj(companyName,data)
        return HttpResponse('Company updated')

    except ValueError as e:
        return HttpResponse('JSON Decode error', status=400)
