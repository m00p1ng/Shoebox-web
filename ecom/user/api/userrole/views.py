from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from ecom.user.model.userrole import UserRoles
from ecom.include.api import request_get
import json

def userRole_all(request):
    return request_get(request, UserRoles.objects.all())

@csrf_exempt
def userRole_create(request):
    if request.method == 'POST':
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
        item = UserRoles.objects(role=role)

        if not item:
            return HttpResponse('This userRole not exist', status=404)
        if not request.body:
            return HttpResponse('Request cannot empty', status=400)

        data = json.loads(request.body.decode())
        if not data:
            return HttpResponse('Data cannot empty', status=400)

        UserRoles.update_obj(slug, data)
        return HttpResponse('User role updated')
    else:
        return HttpResponse('Method not allowed', status=405)
