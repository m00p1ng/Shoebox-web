from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from ecom.include.api import request_get
from ecom.promotion.models import *
import json
import datetime
import re

def promotion_all(request):
    return request_get(request, Promotions.objects.all())

def promotion_name(request, slug):
    return request_get(request, Promotions.objects(slug=slug).first())

@csrf_exempt
def promotion_create(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body.decode())
            err = Promotions.validation(data)

            if len(err) == 0:
                Promotions.create_obj(data)
                return HttpResponse('Promotion created', status=201)
            else:
                output = ''
                for e in err:
                    output += e + '<br />'
                return HttpResponse(output)

        except ValueError as e:
            return HttpResponse('JSON Decode error',status =400)

        except NotUniqueError as e:
            return HttpResponse('Promotion already exist', status=400)
    else:
        return HttpResponse('Method not allowed', status=405)

@csrf_exempt
def promotion_delete(request, slug):
    if request.method == 'DELETE':
        item = Promotions.objects(slug=slug)
        if not item:
            return HttpResponse('This promotion not exist', status=404)
        item.delete()
        return HttpResponse('Promotion removed')
    else:
        return HttpResponse('Method not allowed', status=405)

@csrf_exempt
def promotion_update(request, slug):
    if request.method == 'PUT':
        try:
            item = Promotions.objects(slug=slug)
            if not item:
                return HttpResponse('This promotion not exist',status=404)

            data = json.loads(request.body.decode())
            if not data:
                return HttpResponse('Data cannot empty', status=400)

            Promotions.update_obj(slug,data)
            return HttpResponse('Promotion updated')

        except ValueError as e:
            return HttpResponse('JSON Decode error', status=400)

    else:
        return HttpResponse('Method not allowed', status=405)
