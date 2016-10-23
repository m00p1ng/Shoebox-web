from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from promotion.models import Promotions
import json
import datetime
import re


def request_from(request, data):
    if request.method == 'GET':
        if not data:
            return HttpResponse('Not found', status=404)
        return HttpResponse(data.to_json(), content_type="application/json")
    else:
        return HttpResponse('Method not allowed', status=405)

def promotion_all(request):
    return request_from(request, Promotions.objects.all())

def promotion_name(request, slug):
    return request_from(request, Promotions.objects(slug=slug))

def promotion_validation(data):
    err = []
    if 'name' not in data:
        err.append('Promotion name cannot empty')
    if 'cutprice' not in data:
        err.append('Price cut cannot empty')
    if 'dateStart' not in data:
        err.append('dateStart cannot empty')
    if 'dateEnd' not in data:
        err.append('dateEnd month cannot empty')
    return err

def to_slug(string):
    string = re.sub(r"[^\w\s]", '', string)
    string = re.sub(r"\s+", '-', string)
    return string.lower()

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
                dateStart=datetime.datetime(
                    year=data['dateStart']['year'],
                    month=data['dateStart']['month'],
                    day=data['dateStart']['day']
                ),
                dateEnd=datetime.datetime(
                    year=data['dateEnd']['year'],
                    month=data['dateEnd']['month'],
                    day=data['dateEnd']['day']
                ),
                slug=to_slug(data['name'])
            )
            return HttpResponse('Promotion created', status=201)
        else:
            output = ''
            for e in err:
                output += e + '<br />'
            return HttpResponse(output)
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
