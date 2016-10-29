from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from api.include.api import request_get, errors_to_json
from api.promotion.models import *
import json

@csrf_exempt
def promotion(request):
    body = request.body
    if request.method == 'GET':
        return request_get(query_all())
    if request.method == 'POST':
        return promotion_create(body)
    if request.method == 'PUT':
        return HttpResponse('Method not allowed', status=405)
    if request.method == 'DELETE':
        return HttpResponse('Method not allowed', status=405)


@csrf_exempt
def promotion_with_name(request, slug):
    body = request.body
    if request.method == 'GET':
        return request_get(query_by_name(slug))
    if request.method == 'POST':
        return HttpResponse('Method not allowed', status=405)
    if request.method == 'PUT':
        return promotion_update(body, slug)
    if request.method == 'DELETE':
        return promotion_delete(slug)


def query_all():
    return Promotions.objects.all()


def query_by_name(slug):
    return Promotions.objects(slug=slug).first()


def promotion_create(body):
    try:
        data = json.loads(body.decode())
        err = Promotions.validation(data)

        if len(err) == 0:
            Promotions.create_obj(data)
            return HttpResponse('Promotion created', status=201)
        else:
            return errors_to_json(err)

    except ValueError as e:
        return HttpResponse('JSON Decode error',status =400)

    except NotUniqueError as e:
        return HttpResponse('Promotion already exist', status=400)


def promotion_delete(slug):
    item = Promotions.objects(slug=slug)
    if not item:
        return HttpResponse('This promotion not exist', status=404)
    item.delete()
    return HttpResponse('Promotion removed')


def promotion_update(body, slug):
    try:
        item = Promotions.objects(slug=slug)
        if not item:
            return HttpResponse('This promotion not exist',status=404)

        data = json.loads(body.decode())
        if not data:
            return HttpResponse('Data cannot empty', status=400)

        Promotions.update_obj(slug,data)
        return HttpResponse('Promotion updated')

    except ValueError as e:
        return HttpResponse('JSON Decode error', status=400)
