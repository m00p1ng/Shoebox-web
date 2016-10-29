from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from ecom.user.models import UserRoles
from ecom.include.api import request_get, errors_to_json
from mongoengine import NotUniqueError
import json


@csrf_exempt
def userRole(request):
    body = request.body
    if request.method == 'GET':
        return request_get(query_all())
    if request.method == 'POST':
        return userRole_delete_create(body)
    if request.method == 'PUT':
        return HttpResponse('Method not allowed', status=405)
    if request.method == 'DELETE':
        return HttpResponse('Method not allowed', status=405)


@csrf_exempt
def userRole_with_role(request, slug):
    body = request.body
    if request.method == 'GET':
        return HttpResponse('Method not allowed', status=405)
    if request.method == 'POST':
        return HttpResponse('Method not allowed', status=405)
    if request.method == 'PUT':
        return userRole_update(body, slug)
    if request.method == 'DELETE':
        return userRole_delete(slug)


def query_all():
    return  UserRoles.objects.all()


def userRole_create(body):
    try:
        data = json.loads(body.decode())
        err = UserRoles.validation(data)
        if len(err) == 0:
            UserRoles.create_obj(data)
            return HttpResponse('User role created', status=201)
        else:
            return errors_to_json(err)

    except ValueError as e:
        return HttpResponse('JSON Decode error', status=400)

    except NotUniqueError as e:
        return HttpResponse('Role already exist', status=400)


def userRole_delete(request):
    item = UserRoles.objects(role=role)
    if not item:
        return HttpResponse('This user role not exist', status=404)
    item.delete()
    return HttpResponse('User role removed')


def userRole_update(request, slug):
    try:
        item = UserRoles.objects(role=role)
        if not item:
            return HttpResponse('This userRole not exist', status=404)

        data = json.loads(body.decode())
        if not data:
            return HttpResponse('Data cannot empty', status=400)

        UserRoles.update_obj(slug, data)
        return HttpResponse('User role updated')

    except ValueError as e:
        return HttpResponse('JSON Decode error', status=400)
