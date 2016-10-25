from django.shortcuts import render
from .models import Products

def index(request):
    return render(request, 'product.html', {})
