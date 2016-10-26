from django.http import HttpResponse
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
