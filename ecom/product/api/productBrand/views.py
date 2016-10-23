from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from ecom.product.models import ProductBrands
from ecom.product.api.views import to_slug, request_get
import json

def productBrand_all(request):
    return request_get(request, ProductBrands.objects.all())

def productBrand_name(request, slug):
    return request_get(request, ProductBrands.objects(slug=slug))

def productBrand_validation(data):
    err = []
    if 'name' not in data:
        err.append('Name cannot empty')
    if 'is_active' not in data:
        err.append('is_active cannot empty')
    return err

@csrf_exempt
def productBrand_create(request):
    if request.method == 'POST':
        data = json.loads(request.body.decode())
        err = productBrand_validation(data)
        if len(err) == 0:
            ProductBrands.objects.create(
                name=data['name'],
                is_active=data['is_active'],
                slug=to_slug(data['name'])
            )
            return HttpResponse('ProductBrand created', status=201)
        else:
            output = ''
            for e in err:
                output += e + '<br />'
            return HttpResponse(output)
    else:
        return HttpResponse('Method not allowed', status=405)

@csrf_exempt
def productBrand_delete(request):
    if request.method == 'DELETE':
        item = ProductBrands.objects(slug=slug)
        if not item:
            return HttpResponse('This productBrand not exist', status=404)
        item.delete()
        return HttpResponse('ProductBrand removed')
    else:
        return HttpResponse('Method not allowed', status=405)

@csrf_exempt
def productBrand_update(request):
    if request.method == 'PUT':
        item = ProductBrands.objects(slug=slug)

        if not item:
            return HttpResponse('This productBrand not exist', status=404)
        if not request.body:
            return HttpResponse('Request cannot empty', status=400)

        data = json.loads(request.body.decode())
        if not data:
            return HttpResponse('Data cannot empty', status=400)

        if 'name' in data:
            data['slug'] = to_slug(data['name'])

        item.update(**data)
        return HttpResponse('ProductBrand updated')
    else:
        return HttpResponse('Method not allowed', status=405)
