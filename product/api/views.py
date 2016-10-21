from django.http import HttpResponse, Http404
from product.models import Product

# Create your views here.

def product_all(request):
    request = Product.objects.all()
    if not request:
        raise Http404('Content not found')
    response_data = request.to_json()
    return HttpResponse(response_data, content_type="application/json")

def product_name(request, name):
    request = Product.objects(prodname=name)
    if not request:
        raise Http404('Content not found')
    response_data = request.to_json()
    return HttpResponse(response_data, content_type="application/json")

def product_size(request, size):
    request = Product.objects(size=size)
    if not request:
        raise Http404('Content not found')
    response_data = request.to_json()
    return HttpResponse(response_data, content_type="application/json")
