from django.http import HttpResponse, Http404
from django.views.decorators.csrf import csrf_exempt
from product.models import Product

# Create your views here.

@csrf_exempt
def request_from(request, request_data):
    if request.method == 'POST':
        if not request_data:
            raise Http404('Content not found')
        response_data = request_data.to_json()
        return HttpResponse(response_data, content_type="application/json")
    else:
        raise Http404('Cannot show content')
        return HttpResponse(response_data, content_type="application/json")

@csrf_exempt
def product_all(request):
    return request_from(request, Product.objects.all())

@csrf_exempt
def product_name(request, name):
    return request_from(request, Product.objects(prodname=name))

@csrf_exempt
def product_size(request, size):
    return request_from(request, Product.objects(size=size))
