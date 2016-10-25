from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from ecom.product.models import ProductColors
from ecom.include.api import request_get
import json

def productColor_all(request):
    return request_get(request, ProductColors.objects.all())

def productColor_name(request, slug):
    return request_get(request, ProductColors.objects(slug=slug).first())

@csrf_exempt
def productColor_create(request):
    if request.method == 'POST':
        data = json.loads(request.body.decode())
        err = ProductColors.validation(data)
        if len(err) == 0:
            ProductColors.create_obj(data)
            return HttpResponse('productColor created', status=201)
        else:
            output = ''
            for e in err:
                output += e + '<br />'
            return HttpResponse(output)
    else:
        return HttpResponse('Method not allowed', status=405)

@csrf_exempt
def productColor_delete(request):
    if request.method == 'DELETE':
        item = ProductColors.objects(slug=slug)
        if not item:
            return HttpResponse('This productColor not exist', status=404)
        item.delete()
        return HttpResponse('productColor removed')
    else:
        return HttpResponse('Method not allowed', status=405)

@csrf_exempt
def productColor_update(request, slug):
    if request.method == 'PUT':
        item = ProductColors.objects(slug=slug)

        if not item:
            return HttpResponse('This productColor not exist', status=404)
        if not request.body:
            return HttpResponse('Request cannot empty', status=400)

        data = json.loads(request.body.decode())
        if not data:
            return HttpResponse('Data cannot empty', status=400)

        ProductColors.update_obj(data)
        return HttpResponse('productColor updated')
    else:
        return HttpResponse('Method not allowed', status=405)
