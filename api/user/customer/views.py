from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from api.user.models import Customers
from api.include.api import request_get, errors_to_json, request_get_to_json
from mongoengine import NotUniqueError
import json

json_type = "application/json"

@csrf_exempt
def customer(request):
    body = request.body
    if request.method == 'GET':
        return request_get_to_json(Customers, query_all())
    if request.method == 'POST':
        return customer_create(body)
    if request.method == 'PUT':
        return HttpResponse('Method not allowed', status=405)
    if request.method == 'DELETE':
        return HttpResponse('Method not allowed', status=405)


@csrf_exempt
def customer_with_username(request, username):
    body = request.body
    if request.method == 'GET':
        return request_get_to_json(Customers, query_by_username(username))
    if request.method == 'POST':
        return HttpResponse('Method not allowed', status=405)
    if request.method == 'PUT':
        return customer_update(body, username)
    if request.method == 'DELETE':
        return customer_delete(username)


def query_all():
    return Customers.objects.all().exclude('password')


def query_by_username(username):
    return Customers.objects(username=username).exclude('password').first()


def customer_create(body):
    try:
        data = json.loads(body.decode())
        err = Customers.validation(data)
        if len(err) == 0:
            Customers.create_obj(data)
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

def customer_delete(username):
    user = Customers.objects(username=username)
    err = {}
    if not user:
        err['errorMsg'] = ['This customer not exist']
        err['deleted'] = False
        return HttpResponse(json.dumps(err), content_type=json_type, status=404)
    user.delete()
    message = {'deleted' : True}
    return HttpResponse(json.dumps(message), content_type=json_type)

def customer_update(body, username):
    try:
        user = Customers.objects(username=username)
        err = {}
        if not user:
            err['errorMsg'] = ['This customer not exist']
            err['updated'] = False
            return HttpResponse(json.dumps(err), content_type=json_type, status=404)

        data = json.loads(body.decode())
        if not data:
            err['errorMsg'] = ['Data cannot empty']
            err['updated'] = False
            return HttpResponse(json.dumps(err), content_type=json_type, status=400)

        err['errorMsg'] = []
        if 'username' in data:
            err['errorMsg'].append('Username cannot change')
            err['updated'] = False

        if 'password' in data:
            if len(data['password']) > 20:
                err['errorMsg'].append('Password cannot exceed 20 characters')
                err['updated'] = False
                return HttpResponse(json.dumps(err), content_type=json_type, status=400)
        if len(err['errorMsg']) > 0:
            return HttpResponse(json.dumps(err), content_type=json_type, status=400)

        Customers.update_obj(username, data)

        message = {'updated' :  True}
        return HttpResponse(json.dumps(message), content_type=json_type)

    except ValueError as e:
        err['errorMsg'] = ['JSON Decode error']
        err['updated'] = False
        return HttpResponse(json.dumps(err), content_type=json_type, status=400)
