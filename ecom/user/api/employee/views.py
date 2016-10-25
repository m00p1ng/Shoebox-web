from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from ecom.user.models import Employees
from ecom.include.api import request_get
from mongoengine import NotUniqueError
import json

def employee_all(request):
    query = Employees.objects.all().exclude('password')
    return request_get(request, query)

def employee_username(request, username):
    query = Employees.objects(username=username).exclude('password').first()
    return request_get(request, query)

@csrf_exempt
def employee_create(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body.decode())
            err = Employees.validation(data)
            if len(err) == 0:
                Employees.create_obj(data)
                return HttpResponse('Employee created', status=201)
            else:
                output = ''
                for e in err:
                    output += e + '<br />'
                return HttpResponse(output)

        except ValueError as e:
            return HttpResponse('JSON Decode error', status=400)

        except NotUniqueError as e:
            return HttpResponse('Username already exist', status=400)
    else:
        return HttpResponse('Method not allowed', status=405)

@csrf_exempt
def employee_delete(request, username):
    if request.method == 'DELETE':
        user = Employees.objects(username=username)
        if not user:
            return HttpResponse('This employee not exist', status=404)
        return HttpResponse('Employee removed')
    else:
        return HttpResponse('Method not allowed', status=405)

@csrf_exempt
def employee_update(request, username):
    if request.method == 'PUT':
        try:
            user = Employees.objects(username=username)
            if not user:
                return HttpResponse('This employee not exist', status=404)

            data = json.loads(request.body.decode())
            if not data:
                return HttpResponse('Data cannot empty', status=400)

            Employees.update_obj(username, data)
            return HttpResponse('Employee updated')

        except ValueError as e:
            return HttpResponse('JSON Decode error', status=400)
    else:
        return HttpResponse('Method not allowed', status=405)
