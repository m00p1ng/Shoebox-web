from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from ecom.user.models import Employees
from ecom.include.api import request_get, errors_to_json
from mongoengine import NotUniqueError
import json


@csrf_exempt
def employee(request):
    body = request.body
    if request.method == 'GET':
        return request_get(query_all())
    if request.method == 'POST':
        return employee_create(body)
    if request.method == 'PUT':
        return HttpResponse('Method not allowed', status=405)
    if request.method == 'DELETE':
        return HttpResponse('Method not allowed', status=405)


@csrf_exempt
def employee_with_username(request, username):
    body = request.body
    if request.method == 'GET':
        return request_get(query_by_username(username))
    if request.method == 'POST':
        return HttpResponse('Method not allowed', status=405)
    if request.method == 'PUT':
        return employee_update(body, username)
    if request.method == 'DELETE':
        return employee_delete(username)


def query_all():
    return Employees.objects.all().exclude('password')


def query_by_username(username):
    return Employees.objects(username=username).exclude('password').first()


def employee_create(body):
    try:
        data = json.loads(body.decode())
        err = Employees.validation(data)
        if len(err) == 0:
            Employees.create_obj(data)
            return HttpResponse('Employee created', status=201)
        else:
            return errors_to_json(err)

    except ValueError as e:
        return HttpResponse('JSON Decode error', status=400)

    except NotUniqueError as e:
        return HttpResponse('Username already exist', status=400)


def employee_delete(username):
    user = Employees.objects(username=username)
    if not user:
        return HttpResponse('This employee not exist', status=404)
    return HttpResponse('Employee removed')


def employee_update(body, username):
    try:
        user = Employees.objects(username=username)
        if not user:
            return HttpResponse('This employee not exist', status=404)

        data = json.loads(body.decode())
        if not data:
            return HttpResponse('Data cannot empty', status=400)

        Employees.update_obj(username, data)
        return HttpResponse('Employee updated')

    except ValueError as e:
        return HttpResponse('JSON Decode error', status=400)
