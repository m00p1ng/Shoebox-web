from mongoengine import *
from api.order.models import Orders
from api.product.models import Products

class OrderGroup(Document):
    orderID = ReferenceField(Orders)
    productID = ReferenceField(Products)
    price = IntField()
    quantity = IntField()
    shipDate = DateTimeField()
