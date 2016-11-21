from django.http import HttpResponse
from django.shortcuts import redirect
from django.views.decorators.csrf import csrf_exempt
from mongoengine.django.auth import User
from api.include.api import request_get
import json

json_type = "application/json"

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
    return User.objects(username=username).exclude('password').first()


@csrf_exempt
def login(request):
    if request.method == 'POST':
        try:
            if 'username' in request.session:
                res = json.dumps({
                    "username": request.session['username'],
                    "role": request.session['role']
                })
                return HttpResponse(res, content_type=json_type)

            data = json.loads(request.body.decode())
            username = data['username']
            password = data['password']
            user = User.objects(username=username).first()
            if user and user.check_password(password):
                request.session['username'] = username
                request.session['role'] = user.role
                request.session.save()
                res = json.dumps({
                    "username": request.session['username'],
                    "role": request.session['role']
                })
                return HttpResponse(res, content_type=json_type)
            elif username == '' or password == '':
                if username == '' and password == '':
                    errmsg = json.dumps({
                        "errorMsg": "Username and password cannot empty"
                    })
                elif username == '':
                    errmsg = json.dumps({
                        "errorMsg": "Username cannot empty"
                    })
                elif password == '':
                    errmsg = json.dumps({
                        "errorMsg": "Password cannot empty"
                    })
                return HttpResponse(errmsg, content_type=json_type, status=401)
            else:
                errmsg = json.dumps({
                    "errorMsg": "Username or password incorrect"
                })
            return HttpResponse(errmsg, content_type=json_type, status=401)

        except ValueError as e:
            errmsg = json.dumps({
                "errorMsg": "JSON Decode error"
            })
            return HttpResponse(errmsg, content_type=json_type, status=400)
        except KeyError as e:
            errmsg = json.dumps({
                "errorMsg": "Username or password cannot empty"
            })
            return HttpResponse(errmsg, content_type=json_type, status=400)

    if request.method == 'GET':
        return HttpResponse('Method not allowed', status=405)


@csrf_exempt
def logout(request):
    if 'username' in request.session:
        request.session.flush()
        logged_out = json.dumps({"logged_out": True})
    else:
        logged_out = json.dumps({"logged_out": False})
    return HttpResponse(logged_out, content_type=json_type)
