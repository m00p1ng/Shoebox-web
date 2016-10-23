from django.db import models
from mongoengine import *
import datetime

from user.models import Customers, Employees
from ecom.proudct.models import Products
from ecom.promotion.moedels import Promotions

# Create your models here.

class Orders(Document):
    customerID = ReferenceField(Customers)
    employeeID = ReferenceField(Employees)
    promotionID = ReferenceField(Promotions)
    timeStamp = DateTimeField(required=True, default=datetime.datetime.now)
    totalprice = IntField(required=True)
    shipDate = DateTimeField(required=True)
    Paid = BooleanField(required=True)

class OrderGroup(Document):
    orderID = ReferenceField(Orders)
    productID = ReferenceField(Products)
    price = IntField()
    quantity = IntField()
    shipDate = DateTimeField()
