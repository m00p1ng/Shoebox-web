from django.db import models
from mongoengine import *
from suppliers.models import Suppliers

# Create your models here.
class Products(Document):
    supplierID = ReferenceField(Suppliers)
    name = StringField(max_length=200, required=True, unique=True)
    brand = StringField(max_length=100, required=True)
    types = StringField(max_length=100, required=True)
    description = StringField(max_length=10000, required=True)
    price = FloatField(required=True)
    picture = ImageField(required=True)
    date = DateTimeField(required=True)
    amount = IntField(required=True)
    size = StringField(max_length=10, required=True)
    color = StringField(max_length=20, required=True)
    available = BooleanField(required=True)
    discountAvailable = BooleanField(required=True)
    discountPercent = FloatField(defalut=0)
    slug = StringField(max_lenght=200, required=True, unique=True)
