from django.db import models
from mongoengine import *

# Create your models here.

class Users(Document):
    role = StringField(max_length=10, required=True)
    username = StringField(max_length=50, unique=True, required=True)
    password = StringField(max_length=50, required=True)
    email = StringField(max_length=50, required=True)
    slug = StringField(max_lenght=200, required=True)

class Employees(Document):
    firstname = StringField(max_length=50, required=True)
    lastname = StringField(max_length=50, required=True)
    gender = StringField(max_length=10, required=True)
    birthday = DateTimeField(required=True)
    city = StringField(max_length=50, required=True)
    district = StringField(max_length=50, required=True)
    street = StringField(max_length=50, required=True)
    zipcode = StringField(max_length=10, required=True)
    phone = StringField(max_length=10, required=True)
    dateEntered = DateTimeField(required=True)
    usersID = ReferenceField(Users)

class Customers(Document):
    firstname = StringField(max_length=50, required=True)
    lastname = StringField(max_length=50, required=True)
    gender = StringField(max_length=10, required=True)
    birthday = DateTimeField(required=True)
    city = StringField(max_length=50, required=True)
    district = StringField(max_length=50, required=True)
    street = StringField(max_length=50, required=True)
    zipcode = StringField(max_length=10, required=True)
    phone = StringField(max_length=10, required=True)
    creditType = StringField(max_length=10, required=True)
    creditId = StringField(max_length=16, required=True)
    creditEXP = DateTimeField(required=True)
    shipCity = StringField(max_length=50, required=True)
    shipDistrict = StringField(max_length=50, required=True)
    shipStreet = StringField(max_length=50, required=True)
    shipZip = StringField(max_length=10, required=True)
    dateEntered = DateTimeField(required=True)
    usersID = ReferenceField(Users)
