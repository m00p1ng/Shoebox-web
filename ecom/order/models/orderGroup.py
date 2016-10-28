from mongoengine import *
from ecom.order.models import Orders
from ecom.product.models import Products

class OrderGroup(Document):
    orderID = ReferenceField(Orders)
    productID = ReferenceField(Products)
    price = IntField()
    quantity = IntField()
    shipDate = DateTimeField()
