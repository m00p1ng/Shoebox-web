from mongoengine import *
from api.include.model import timestamp_date
from api.user.models import Customers
from api.order.models import *
import datetime
import json


class Cart(EmbeddedDocument):
    product = StringField(required=True)
    qty = IntField(required=True)
    price = IntField(required=True)
    subtotal = FloatField(required=True)


    @staticmethod
    def validation(data):
        err = []
        if 'product' not in data:
            err.append('Total cannot empty')
        if 'qty' not in data:
            err.append('Qty cannot empty')
        if 'price' not in data:
            err.append('Price cannot empty')
        if 'subtotal' not in data:
            err.append('Subtotal cannot empty')
        return err


    @classmethod
    def create_obj(cls, data):
        cart = cls(
            product = data['product'],
            qty = data['qty'],
            price = data['price'],
            subtotal = data['subtotal']
        )
        return cart


class Orders(Document):
    orderID = IntField(required=True,unique=True)
    username = ReferenceField(Customers)
    timestamp = DateTimeField(required=True, default=datetime.datetime.now())
    status = BooleanField(required=True,default=False)
    total = FloatField(required=True)
    cart = ListField(EmbeddedDocumentField(Cart)) 


    def get_id_from_field(data):
        field_id = {}

        if 'username' in data:
            username = Customers.objects(username=data['username']).first().id
            field_id['username'] = username

        return field_id


    @staticmethod
    def validation(data):
        err = []
        if 'total' not in data:
            err.append('Total cannot empty')
        if 'username' not in data:
            err.append('Username cannot empty')
        return err


    @classmethod
    def create_obj(cls, data):
        field_id = cls.get_id_from_field(data)
        order = cls(
            username = field_id['username'],
            orderID = data['orderID'],
            total = data['total'],
        )
        order.save()
        return order


    @classmethod
    def update_obj(cls, oid, data):
        data.pop('username',None)

        order = cls.objects(orderID=oid)
        order.update(**data)
        return order


    def to_realData(data):
        username = Customers.objects(pk=data['username']).first().username

        real_data = {'username' : username}

        return real_data


    @classmethod
    def mapID_to_obj(cls, order):
        data = {'username': order.username.id}

        real_data = cls.to_realData(data)

        obj = {
            'orderID' : order.orderID,
            'username' : real_data['username'],
            'total' : order.total,
            'timestamp' : timestamp_date(order.timestamp),
            'status' : order.status,
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

