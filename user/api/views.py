from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from user.models import Users
import json


def request_get(request, data):
    if request.method == 'GET':
        if not data:
            return HttpResponse('Content not found', status=404)
        return HttpResponse(data.to_json(), content_type="application/json")
    else:
        return HttpResponse('Method not allowed', status=405)

def user_all(request):
    return request_get(request, Users.objects.all())

def user_id(reqeust, id):
    return request_get(request, Users.objects(pk=id))

def user_username(request, username):
    return request_get(request, Users.objects(username=username))

def user_validation(data):
    err = []
    if 'username' not in data:
        err.append('Username cannot empty')
    if 'password' not in data:
        err.append('Password cannot empty')
    if 'repassword' not in data:
        err.append('Re password cannot empty')
    if 'email' not in data:
        err.append('Email cannot empty')

@csrf_exempt
def user_create(request):
    if request.method == 'POST':
        raw_data = request.body.decode()
        err = user_validation(raw_data)
        if len(err) == 0:
            data = json.loads(raw_data)
            Users.objects.create(
                username=data['username'],
                password=data['password'],
                email=data['email'],
                role=data['role']
            ).save()
            return HttpResponse('User created', status=201)
        else:
            output = ''
            for e in err:
                output += e + '<br />'
            return HttpResponse(output)
    else:
        return HttpResponse('Method not allowed', status=405)

@csrf_exempt
def user_delete(request, username):
    if request.method == 'DELETE':
        user = Users.objects(pk=username)
        if not user:
            return HttpResponse('This user not exist', status=404)
        return HttpResponse('User removed')
    else:
        return HttpResponse('Method not allowed', status=405)

@csrf_exempt
def user_update(request, username):
    if request.method == 'PUT':
        user = Users.objects(pk=username)
        if not item:
            return HttpResponse('This user not exist', status=404)
        data = json.loads(request.body.decode())
        user.update(**data)
        return HttpResponse('User updated')
    else:
        return HttpResponse('Method not allowed', status=405)
