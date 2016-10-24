from django.shortcuts import render, redirect
from django.http import HttpResponse
from django.contrib.auth import login, logout
from .models import *

# Create your views here.

def login(request):
    if request.method == 'POST':
        pass


def logout(request):
    pass

def register(request):
    pass
