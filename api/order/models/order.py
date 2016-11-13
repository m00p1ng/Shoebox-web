from mongoengine import *
from api.include.model import timestamp_date
from api.user.models import Customers
import datetime
import json


class Orders(Document):
    orderID = StringField(max_length=50,unique=True)
    customer = ReferenceField(Customers)
    date = DateTimeField(required=True)
    timeStamp = StringField(required=True)
    status = BooleanField(required=True)
    orderNumber = ListField(StringField(max_length=20),unique=True)

    def get_id_from_field(data):
        field_id = {}

        if 'customer' in data:
            customer = Customers.objects(username=data['customer']).first().id
            field_id['customer'] = customer

        return field_id


    @staticmethod
    def validation(data):
        err = []
        if 'orderID' not in data:
            err.append('orderID cannot empty')
        if 'customer' not in data:
            err.append('Customers cannot empty')
        if 'status' not in data:
            err.append('Status cannot empty')
        if 'orderNumber' not in data:
            err.append('orderNumber cannot empty')
        if 'date' not in data:
            err.append('Date cannot empty')
            err.append('- year cannot empty')
            err.append('- month cannot empty')
            err.append('- day cannot empty')
        else:
            if not {'year', 'month' , 'day'} <= set(data['date']):
                err.append('date cannot empty')
                if 'year' not in data['date']:
                    err.append('- year cannot empty')
                if 'month' not in data['date']:
                    err.append('- year cannot empty')
                if 'year' not in data['date']:
                    err.append('- year cannot empty')
        return err


    @classmethod
    def create_obj(cls, data):
        field_id = cls.get_id_from_field(data)
        order = cls(
            customer = field_id['customer'],
            orderID = data['orderID'],
            date = datetime.datetime(
                year = data['date']['year'],
                month = data['date']['month'],
                day = data['date']['day']
            ),
            status = data['status'],
            orderNumber = data['orderNumber'],
            timeStamp = get_Timestamp(),
        )
        order.save()
        return order


    @classmethod
    def update_obj(cls, oid, data):
        if 'date' in data:
            data['date'] = datetime.datetime(
                year=data['date']['year'],
                month=data['date']['month'],
                day=data['date']['day']
            )
        order = cls.objects(orderID=oid)
        order.update(**data)
        return order


    def to_realData(data):
        customer = Customers.objects(pk=data['customer']).first().username

        real_data = {'customer' : customer}

        return real_data


    @classmethod
    def mapID_to_obj(cls, order):
        data = {'customer': order.customer.id}

        real_data = cls.to_realData(data)

        obj = {
            'orderID' : order.orderID,
            'customer' : real_data['customer'],
            'date' : str(order.date),
            'timeStamp' : order.timeStamp,
            'status' : order.status,
            'orderNumber' : order.orderNumber
        }

        return obj


    @classmethod
    def map_referenceID(cls, orders):
        output = []
        if not hasattr(orders, 'count'):
            obj = cls.mapID_to_obj(orders)
            return json.dumps(obj)
        else:
            for order in orders:
                obj = cls.mapID_to_obj(order)
                output.append(obj)
            return json.dumps(output)


def get_Timestamp():
    now = datetime.datetime.now()
    split = str(now).split()
    timestamp = split[1][0:8]
    return timestamp

