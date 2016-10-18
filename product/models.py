from django.db import models
from mongoengine import *

# Create your models here.
class Product(Document):
    supplierID = ObjectIdField()
    prodname = StringField(max_length=200)
    prodtype = StringField(max_length=100)
    description = StringField(max_length=10000)
    unitprice = FloatField()
    picture = ImageField()
    amount = IntField()
    size = StringField(max_length=10)
    color = StringField(max_length=20)
    productAvailable = IntField()
    discountAvailable = IntField()
