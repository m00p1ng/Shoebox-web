from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from api.user.models import Employees
from api.include.api import request_get, errors_to_json, request_get_to_json
from mongoengine import NotUniqueError
import json

json_type = "application/json"

@csrf_exempt
def employee(request):
    body = request.body
    if request.method == 'GET':
        return request_get_to_json(Employees, query_all())
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
        return request_get_to_json(Employees, query_by_username(username))
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
            message = {'created' : True}
            return HttpResponse(json.dumps(message), content_type=json_type, status=201)
        else:
            return errors_to_json(err, 'created')

    except ValueError as e:
        err = {}
        err['errorMsg'] = ['JSON Decode error']
        err['created'] = False
        return HttpResponse(json.dumps(err), content_type=json_type, status=400)

    except NotUniqueError:
        err = {}
        err['errorMsg'] = ['Username already exist']
        err['created'] = False
        return HttpResponse(json.dumps(err), content_type=json_type, status=400)

def employee_delete(username):
    user = Employees.objects(username=username)
    err = {}
    if not user:
        err['errorMsg'] = ['This employee not exist']
        err['deleted'] = False
        return HttpResponse(json.dumps(err), content_type=json_type, status=404)
    user.delete()
    message = {'deleted' : True}
    return HttpResponse(json.dumps(message), content_type=json_type)


def employee_update(body, username):
    try:
        user = Employees.objects(username=username)
        err = {}
        if not user:
            err['errorMsg'] = ['This employee not exist']
            err['updated'] = False
            return HttpResponse(json.dumps(err), content_type=json_type, status=404)

        data = json.loads(body.decode())
        if not data:
            err['errorMsg'] = ['Data cannot empty']
            err['updated'] = False
            return HttpResponse(json.dumps(err), content_type=json_type, status=400)

        Employees.update_obj(username, data)

        message = {'updated' : True}
        return HttpResponse(json.dumps(message), content_type=json_type)

    except ValueError as e:
        err['errorMsg'] = ['JSON Decode error']
        err['updated'] = False
        return HttpResponse(json.dumps(err), content_type=json_type, status=400)
