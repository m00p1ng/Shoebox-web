from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from ecom.product.models import ProductColors
from ecom.product.api.views import to_slug, request_get
import json

def productColor_all(request):
    return request_get(request, ProductColors.objects.all())

def productColor_name(request, slug):
    return request_get(request, ProductColors.objects(slug=slug))

def productColor_validation(data):
    err = []
    if 'name' not in data:
        err.append('Name cannot empty')
    if 'is_active' not in data:
        err.append('is_active cannot empty')
    return err

@csrf_exempt
def productColor_create(request):
    if request.method == 'POST':
        data = json.loads(request.body.decode())
        err = productColor_validation(data)
        if len(err) == 0:
            ProductColors.objects.create(
                name=data['name'],
                is_active=data['is_active'],
                slug=to_slug(data['name'])
            )
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
def productColor_update(request):
    if request.method == 'PUT':
        item = ProductColors.objects(slug=slug)

        if not item:
            return HttpResponse('This productColor not exist', status=404)
        if not request.body:
            return HttpResponse('Request cannot empty', status=400)

        data = json.loads(request.body.decode())
        if not data:
            return HttpResponse('Data cannot empty', status=400)

        if 'name' in data:
            data['slug'] = to_slug(data['name'])

        item.update(**data)
        return HttpResponse('productColor updated')
    else:
        return HttpResponse('Method not allowed', status=405)
