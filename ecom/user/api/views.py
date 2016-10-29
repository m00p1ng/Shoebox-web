from django.http import HttpResponse
from django.shortcuts import redirect
from django.views.decorators.csrf import csrf_exempt
from mongoengine.django.auth import User
from ecom.include.api import request_get
import json

@csrf_exempt
def user(request):
    body = request.body
    if request.method == 'GET':
        return request_get(query_all())
    if request.method == 'POST':
        return HttpResponse('Method not allowed', status=405)
    if request.method == 'PUT':
        return HttpResponse('Method not allowed', status=405)
    if request.method == 'DELETE':
        return HttpResponse('Method not allowed', status=405)


@csrf_exempt
def user_with_username(request, username):
    body = request.body
    if request.method == 'GET':
        return request_get(query_username(username))
    if request.method == 'POST':
        return HttpResponse('Method not allowed', status=405)
    if request.method == 'PUT':
        return HttpResponse('Method not allowed', status=405)
    if request.method == 'DELETE':
        return HttpResponse('Method not allowed', status=405)


def query_all():
    return User.objects.all().exclude('password')


def query_username(username):
    return User.objects(username=username).exclude('password')


@csrf_exempt
def login(request):
    if request.method == 'POST':
        try:
            if 'username' in request.session:
                token = {"token": request.session.session_key}
                return HttpResponse(json.dumps(token), content_type="application/json")

            data = json.loads(request.body.decode())
            username = data['username']
            password = data['password']
            user = User.objects(username=username).first()
            if user and user.check_password(password):
                request.session['username'] = username
                request.session['role'] = user.role
                request.session.save()
                token = {"token": request.session.session_key}
                return HttpResponse(json.dumps(token), content_type="application/json")
            else:
                return HttpResponse('Username or password not correct')

        except ValueError as e:
            return HttpResponse('JSON Decode error', status=400)
        except KeyError as e:
            return HttpResponse('Username or password cannot empty', status=400)


@csrf_exempt
def logout(request):
    request.session.flush()
    return HttpResponse("logout")


def register(request):
    pass
