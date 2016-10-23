from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from promotion.models import Promotions
import json
import datetime
import re

# Create your views here.

def request_from(request, data):
    if request.method == 'GET':
        if not data:
            return HttpResponse('Content not found', status=404)
        return HttpResponse(data.to_json(), content_type="application/json")
    else:
        return HttpResponseBadRequest('Method Not Allowed', status=405)

def promotion_all(request):
    return request_from(request, Promotions.objects.all())

def promotion_name(request, name):
    return request_from(request, Promotions.objects(name=name))

def promotion_validation(data):
    err = []
    if 'name' not in data:
        err.append('Promotion name cannot empty')
    if 'cutprice' not in data:
        err.append('Price cut cannot empty')
    if 'yearS' not in data:
        err.append('Start year cannot empty')
    if 'monthS' not in data:
        err.append('Start month cannot empty')
    if 'dayS' not in data:
        err.append('Start day cannot empty')
    if 'yearE' not in data:
        err.append('End year cannot empty')
    if 'monthE' not in data:
        err.append('End month cannot empty')
    if 'dayE' not in data:
        err.append('End day cannot empty')
    return err

def promotion_slug(name):
    name = re.sub(r"[^\w\s]", '', name)
    name = re.sub(r"\s+", '-', name)
    return name.lower()

@csrf_exempt
def promotion_create(request):
    if request.method == 'POST':
        raw_data = request.body.decode()
        err = promotion_validation(raw_data)
        if len(err) == 0:
            data = json.loads(raw_data)
            Promotions.objects.create(
                name=data['name'],
                cutprice=data['cutprice'],
                dateStart=datetime.datetime(year=data['yearS'], month=data['monthS'], day=data['dayS']),
                dateEnd=datetime.datetime(year=data['yearE'], month=data['monthE'], day=data['dayE']),
                slug=promotion_slug(data['name'])
            )
            return HttpResponse('Promotion created', status=201)
        else:
            output = ''
            for e in err:
                output += e + '<br />'
            return HttpResponse(output)
    else:
        return HttpResponse('Method not Allowed', status=405)

@csrf_exempt
def promotion_delete(request, id):
    if request.method == 'DELETE':
        Promotions.objects(pk=slug).delete()
        return HttpResponse('Promotion removed')
    else:
        return HttpResponse('Method not Allowed', status=405)
