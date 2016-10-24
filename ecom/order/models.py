from mongoengine import *
from ecom.user.models import Customers, Employees
from ecom.proudct.models import Products
from ecom.promotion.moedels import Promotions
import datetime

class Orders(Document):
    customerID = ReferenceField(Customers)
    employeeID = ReferenceField(Employees)
    promotionID = ReferenceField(Promotions)
    timeStamp = DateTimeField(required=True, default=datetime.datetime.now)
    totalprice = IntField(required=True)
    shipDate = DateTimeField(required=True)
    status = BooleanField(required=True)

class OrderGroup(Document):
    orderID = ReferenceField(Orders)
    productID = ReferenceField(Products)
    price = IntField()
    quantity = IntField()
    shipDate = DateTimeField()
