from django.shortcuts import render
from .models import Products

def product(request):
    return render(request, 'product.html', {})
