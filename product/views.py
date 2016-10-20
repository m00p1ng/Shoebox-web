from django.shortcuts import render
from .models import Product

def product_all(request):
    return render(request, 'index.html', {})
