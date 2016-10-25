from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from ecom.user.models import UserRoles
from ecom.include.api import request_get
from mongoengine import NotUniqueError
import json

def userRole_all(request):
    return request_get(request, UserRoles.objects.all())

@csrf_exempt
def userRole_create(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body.decode())
            err = UserRoles.validation(data)
            if len(err) == 0:
                UserRoles.create_obj(data)
                return HttpResponse('User role created', status=201)
            else:
                output = ''
                for e in err:
                    output += e + '<br />'
                return HttpResponse(output)

        except ValueError as e:
            return HttpResponse('JSON Decode error', status=400)

        except NotUniqueError as e:
            return HttpResponse('Role already exist', status=400)
    else:
        return HttpResponse('Method not allowed', status=405)

@csrf_exempt
def userRole_delete(request):
    if request.method == 'DELETE':
        item = UserRoles.objects(role=role)
        if not item:
            return HttpResponse('This user role not exist', status=404)
        item.delete()
        return HttpResponse('User role removed')
    else:
        return HttpResponse('Method not allowed', status=405)

@csrf_exempt
def userRole_update(request, slug):
    if request.method == 'PUT':
        try:
            item = UserRoles.objects(role=role)
            if not item:
                return HttpResponse('This userRole not exist', status=404)

            data = json.loads(request.body.decode())
            if not data:
                return HttpResponse('Data cannot empty', status=400)

            UserRoles.update_obj(slug, data)
            return HttpResponse('User role updated')

        except ValueError as e:
            return HttpResponse('JSON Decode error', status=400)
    else:
        return HttpResponse('Method not allowed', status=405)
