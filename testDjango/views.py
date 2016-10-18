from django.shortcuts import render, redirect
from .models import TestDB

# Create your views here.

def index(request):
    testData = TestDB.objects.all()
    return render(request, 'index.html', {"obj": testData})


def insert(request):
    if request.method == "POST":
        testData = 'Test data insert to database.'

        TestDB.objects.create(test=testData)
        return redirect('/test/')
