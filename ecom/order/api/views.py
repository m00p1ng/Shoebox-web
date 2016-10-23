from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from ecom.user.models import (Customers,Employees)
from ecom.prommotion.models import Promotions
from ecom.order.models import Orders,OrderGroup
import json
import datetime
import re


def request_get(request, data):
    if request.method == 'GET':
        if not data:
            return HttpResponse('Not found', status=404)
        return HttpResponse(data.to_json(), content_type="application/json")
    else:
        return HttpResponse('Method not allowed', status=405)

def order_all(request):
    return request_get(request, Orders.objects.all())

def order_name(request, slug):
    return request_get(request, Orders.objects(slug=slug))

def order_validation(data):
    err = []
    if 'timeStamp' not in data:
        err.append('Timestamp cannot empty')
    if 'totalprice' not in data:
        err.append('Total price cannot empty')
    if 'shipDate' not in data:
        err.append('Ship date cannot empty')
    if 'status' not in data:
        err.append('status cannot empty')
    if 'price' not in data:
        err.append('Price cannot empty')
    return err

# def get_id_from_field(data):
#     field_id = {}
#     customerID = Customers.objects(id=data['_id']).id
#     employeeID = Employees.objects(id=data['_id']).id
#     promotionID = Promotions.objects(id=data['_id']).id
#     field_id['customerID'] = customerID
#     field_id['employeeID'] = employeeID
#     field_id['promotionID'] = promotionID
#     return field_id

@csrf_exempt
def order_create(request):
    if request.method == 'POST':
        data = json.loads(request.body.decode())
        err = order_validation(data)
        if len(err) == 0:
            #field_id = get_id_from_field(data)
            order = Orders.objects.create(
                timeStamp=data['timeStamp'],
                shipDate=datetime.datetime(
                    year=data['date']['year'],
                    month=data['date']['month'],
                    day=data['date']['day']
                ),
                status=data['status'],
                customerID=data['customerID'],
                employeeID=data['employeeID'],
                promotionID=data['promotionID']
            )
            return HttpResponse('Order created', status=201)
        else:
            output = ''
            for e in err:
                output += e + '<br />'
            return HttpResponse(output)
    else:
        return HttpResponse('Method not allowed', status=405)

@csrf_exempt
def order_delete(request, id):
    if request.method == 'DELETE':
        item = Orders.objects(pk=id)
        if not item:
            return HttpResponse('This order not exist', status=404)
        item.delete()
        return HttpResponse('Order removed')
    else:
        return HttpResponse('Method not allowed', status=405)

@csrf_exempt
def order_update(request, id):
    if request.method == 'PUT':
        item = Orders.objects(id=id)

        if not item:
            return HttpResponse('This order not exist', status=404)
        if not request.body:
            return HttpResponse('Request cannot empty', status=400)

        data = json.loads(request.body.decode())
        if not data:
            return HttpResponse('Data cannot empty', status=400)
        if 'shipDate' in data:
            data['shipDate'] = datetime.datetime(
                                year=data['date']['year'],
                                month=data['date']['month'],
                                day=data['date']['day']
                            )

        item.update(**data)
        return HttpResponse('Order updated')
    else:
        return HttpResponse('Method not allowed', status=405)
