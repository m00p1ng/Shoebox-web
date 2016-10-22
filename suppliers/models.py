from django.db import models
from mongoengine import *
# Create your models here.

class Suppliers(Document):
    companyName = StringField(max_length=50, required=True, unique=True)
    contactFirstname = StringField(max_length=50, required=True)
    contactLastname = StringField(max_length=10, required=True)
    contactTitle = StringField(max_length=150, required=True)
    city = StringField(max_length=50, required=True)
    district = StringField(max_length=50, required=True)
    street = StringField(max_length=50, required=True)
    zipcode = StringField(max_length=10, required=True)
    phone = StringField(max_length=10, required=True)
    email = EmailField(max_length=50, required=True)
    slug = StringField(max_lenght=200, required=True, unique=True)
