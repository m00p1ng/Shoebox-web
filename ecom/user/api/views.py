from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from mongoengine.django.auth import User
from ecom.include.api import request_get
import json

def user_all(request):
    query = User.objects.all().exclude('password')
    return request_get(request, query)

def user_username(request, username):
    query = User.objects(username=username).exclude('password')
    return request_get(request, query)
