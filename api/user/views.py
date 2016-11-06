from django.http import HttpResponse
from django.shortcuts import redirect
from django.views.decorators.csrf import csrf_exempt
from mongoengine.django.auth import User
from api.include.api import request_get
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
                res = {
                    "username": request.session['username'],
                    "role": request.session['role']
                }
                return HttpResponse(json.dumps(res), content_type="application/json")

            data = json.loads(request.body.decode())
            username = data['username']
            password = data['password']
            user = User.objects(username=username).first()
            if user and user.check_password(password):
                request.session['username'] = username
                request.session['role'] = user.role
                request.session.save()
                res = {
                    "username": request.session['username'],
                    "role": request.session['role']
                }
                return HttpResponse(json.dumps(res), content_type="application/json")
            elif username == '' or password == '':
                if username == '' and password == '':
                    errmsg = '{"errorMsg": "Username and password cannot empty"}'
                elif username == '':
                    errmsg = '{"errorMsg": "Username cannot empty"}'
                elif password == '':
                    errmsg = '{"errorMsg": "Password cannot empty"}'
                return HttpResponse(errmsg, content_type="application/json", status=401)
            else:
                errmsg = '{"errorMsg": "Username or password incorrect"}'
            return HttpResponse(errmsg, content_type="application/json", status=401)

        except ValueError as e:
            errmsg = '{"errorMsg": "JSON Decode error"}'
            return HttpResponse(errmsg, status=400)
        except KeyError as e:
            errmsg = '{"errorMsg": "Username or password cannot empty"}'
            return HttpResponse(errmsg, status=400)

    if request.method == 'GET':
        return HttpResponse('Method not allowed', status=405)


@csrf_exempt
def logout(request):
    if 'username' in request.session:
        request.session.flush()
        logged_out = {"logged_out": True}
    else:
        logged_out = {"logged_out": False}
    return HttpResponse(json.dumps(logged_out), content_type="application/json")
