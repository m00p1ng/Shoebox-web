from django.shortcuts import render
from .models import Product

# Create your views here.

def product_all(request):
    # Product.objects.create(
    #     prodname = "nikeeiei",
    #     prodtype = 'running',
    # )
    return render(request, 'index.html', {})
