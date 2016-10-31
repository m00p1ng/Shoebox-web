from mongoengine import *
from api.include.model import timestamp_date
from api.user.models import Customers
import datetime
import json

class Orders(Document):
    customer = ReferenceField(Customers)
    date = DateTimeField(required=True)
    timeStamp = StringField(required=True)
    status = BooleanField(required=True)
    orderNumber = ListField(StringField(max_length=20))
    username = StringField(max_length=200,required=True)

    def get_id_from_field(data):
        field_id = {}

        if 'customer' in data:
            customer = Customers.objects(username=data['customer']).first().id
            field_id['customer'] = customer

        return field_id

    @staticmethod
    def validation(data):
        err = []
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
            date = datetime.datetime(
                year = data['date']['year'],
                month = data['date']['month'],
                day = data['date']['day']
            ),
            status = data['status'],
            orderNumber = data['orderNumber'],
            timeStamp = get_Timestamp(),
            username = Customers.objects(username=data['customer']).first().username
        )
        order.save()
        return order

    @classmethod
    def update_obj(cls, cid, data):
        if 'date' in data:
            data['date'] = datetime.datetime(
                year=data['date']['year'],
                month=data['date']['month'],
                day=data['date']['day']
            )
        order = cls.objects(pk=cid)
        order.update(**data)
        return order

def get_Timestamp():
    now = datetime.datetime.now()
    split = str(now).split()
    timestamp = split[1][0:8]
    return timestamp

