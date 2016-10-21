from django.db import models
from mongoengine import *
# Create your models here.

class Supplier(Document):
    supName = StringField(max_length=50, required=True)
    supContactFName = StringField(max_length=50, required=True)
    supContactLName = StringField(max_length=10, required=True)
    contactTitle = StringField(max_length=150, required=True)
    supCity = StringField(max_length=50, required=True)
    supDistrict = StringField(max_length=50, required=True)
    supStreet = StringField(max_length=50, required=True)
    supZip = StringField(max_length=10, required=True)
    supContactPhone = StringField(max_length=10, required=True)
    supEmail = StringField(max_length=50, required=True)
