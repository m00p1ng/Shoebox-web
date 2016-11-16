from mongoengine import *
from api.include.model import timestamp_fulldate
from api.user.models import Customers
from .cart import Cart
import datetime
import json

class Orders(Document):
    orderID = IntField(min_value=1, required=True, unique=True)
    username = ReferenceField(Customers)
    timestamp = DateTimeField(required=True, default=datetime.datetime.now())
    status = BooleanField(required=True, default=False)
    total = FloatField(required=True)
    cart = ListField(EmbeddedDocumentField(Cart))


    def get_id_from_field(data, session):
        field_id = {}

        if 'username' in session and session['role'] == 'customer':
            username = Customers.objects(username=session['username']).first().id
            field_id['username'] = username

        return field_id


    @staticmethod
    def validation(data):
        err = []
        if 'total' not in data:
            err.append('Total cannot empty')
        return err


    @classmethod
    def create_obj(cls, data, session):
        field_id = cls.get_id_from_field(data, session)
        orderID = cls.objects.count() + 1
        order = cls(
            username = field_id['username'],
            orderID = orderID,
            total = data['total'],
        )

        for item in data['cart']:
            cart = Cart.create_obj(item)
            order.cart.append(cart)

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
            'timestamp' : timestamp_fulldate(order.timestamp),
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
