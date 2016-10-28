from mongoengine import *
from ecom.user.models import Customers, Employees
from ecom.proudct.models import Products
from ecom.promotion.models import Promotions
import datetime

class Orders(Document):
    customerID = ReferenceField(Customers)
    employeeID = ReferenceField(Employees)
    promotionID = ReferenceField(Promotions)
    timeStamp = DateTimeField(required=True, default=datetime.datetime.now)
    totalprice = IntField(required=True)
    shipDate = DateTimeField(required=True)
    status = BooleanField(required=True)
    productID = ReferenceField(Products)
    price = IntField()
    quantity = IntField()

    @staticmethod
    def validation(data):
        err = []
        if 'totalprice' not in data:
            err.append('Totalprice cannot empty')
        if 'shipDate' not in data:
            err.append('ShipDate cannot empty')
            err.append('- year cannot empty')
            err.appemd('- month cannot empty')
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
        if 'status' not in data:
            err.append('Status cannot empty')
        if 'price' not in data:
            err.append('Price cannot empty')
        if 'quantity' not in data:
            err.append('Quantity cannot empty')

    @classmethod
    def create_obj(cls, data):
        order = cls(
            totalprice = data['totalprice'],
            shipDate = datetime.datetime(
                year = data['date']['year'],
                month = data['date']['month'],
                day = data['date']['day'],
            ),
            status = data['status'],
            quantity = data['quantity'],
            price = data['price'],
        )

        order.save()
        return order

    @classmethod
    def update_obj(cls,data) 
        if 'shipDate' in data:
            data['shipDate'] = datetime.datetime(
                year = data['date']['year'],
                month = data['date']['month'],
                day = data['date']['day'],
            )
        if 'status' in data:
            status = data['status']
        if 'totalprice' in data
            totalprice = data['totalprice']
        if 'quantity' in data:
            status = data['quantity']
        if 'price' in data
            totalprice = data['price']
        order.update(**data)
        return order
