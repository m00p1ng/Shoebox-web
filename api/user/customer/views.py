from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from api.user.models import Customers
from api.include.api import request_get, errors_to_json
from mongoengine import NotUniqueError
import json


@csrf_exempt
def customer(request):
    body = request.body
    if request.method == 'GET':
        return request_get(query_all())
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
        return request_get(query_by_username(username))
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
            return HttpResponse('Customer created', status=201)
        else:
            return errors_to_json(err)

    except ValueError as e:
        return HttpResponse('JSON Decode error', status=400)

    except NotUniqueError:
        return HttpResponse('Username already exist', status=400)


def customer_delete(username):
    user = Customers.objects(username=username)
    if not user:
        return HttpResponse('This customer not exist', status=404)
    return HttpResponse('Customer removed')


def customer_update(body, username):
    try:
        user = Customers.objects(username=username)
        if not user:
            return HttpResponse('This customer not exist', status=404)

        data = json.loads(body.decode())
        if not data:
            return HttpResponse('Data cannot empty', status=400)

        Customers.update_obj(username, data)
        return HttpResponse('Customer updated')

    except ValueError as e:
        return HttpResponse('JSON Decode error', status=400)
