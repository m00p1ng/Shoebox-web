from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from ecom.user.models import Customers
import json


def request_get(request, data):
    if request.method == 'GET':
        if not data:
            return HttpResponse('Content not found', status=404)
        return HttpResponse(data.to_json(), content_type="application/json")
    else:
        return HttpResponse('Method not allowed', status=405)

def customer_all():
    return request_get(request, Customers.objects.all())
