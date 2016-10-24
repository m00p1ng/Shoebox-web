from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from ecom.product.models import ProductTypes
from ecom.product.api.functions import request_get
import json

def productType_all(request):
    return request_get(request, ProductTypes.objects.all())

def productType_name(request, slug):
    return request_get(request, ProductTypes.objects(slug=slug))

@csrf_exempt
def productType_create(request):
    if request.method == 'POST':
        data = json.loads(request.body.decode())
        err = ProductTypes.validation(data)
        if len(err) == 0:
            ProductTypes.create_obj(data)
            return HttpResponse('ProductType created', status=201)
        else:
            output = ''
            for e in err:
                output += e + '<br />'
            return HttpResponse(output)
    else:
        return HttpResponse('Method not allowed', status=405)

@csrf_exempt
def productType_delete(request):
    if request.method == 'DELETE':
        item = ProductTypes.objects(slug=slug)
        if not item:
            return HttpResponse('This productType not exist', status=404)
        item.delete()
        return HttpResponse('ProductType removed')
    else:
        return HttpResponse('Method not allowed', status=405)

@csrf_exempt
def productType_update(request, slug):
    if request.method == 'PUT':
        item = ProductTypes.objects(slug=slug)

        if not item:
            return HttpResponse('This productType not exist', status=404)
        if not request.body:
            return HttpResponse('Request cannot empty', status=400)

        data = json.loads(request.body.decode())
        if not data:
            return HttpResponse('Data cannot empty', status=400)

        ProductTypes.update_obj(slug, data)
        return HttpResponse('ProductType updated')
    else:
        return HttpResponse('Method not allowed', status=405)
