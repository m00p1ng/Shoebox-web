from django.db import models
from mongoengine import *

# Create your models here.

class Users(EmbeddedDocument):
    userId = ObjectIdField()
    userRole = StringField(max_length=10, required=True) 
    username = StringField(max_length=50, unique=True, required=True)
    password = StringField(max_length=50, required=True)
    email = StringField(max_length=50, required=True)

class Employees(Document):
    empFName = StringField(max_length=50, required=True)
    empLName = StringField(max_length=50, required=True)
    gender = StringField(max_length=10, required=True)
    dateOfB = DateTimeField(required=True)
    empCity = StringField(max_length=50, required=True)
    empDistrict = StringField(max_length=50, required=True)
    empStreet = StringField(max_length=50, required=True)
    empZip = StringField(max_length=10, required=True)
    empPhone = StringField(max_length=10, required=True)
    dateEntered = DateTimeField(required=True)
    users = ListField(EmbeddedDocumentField(Users))

class Customers(Document):
    custFName = StringField(max_length=50, required=True)
    custLName = StringField(max_length=50, required=True)
    gender = StringField(max_length=10, required=True)
    dateOfB = DateTimeField(required=True)
    custCity = StringField(max_length=50, required=True)
    custDistrict = StringField(max_length=50, required=True)
    custStreet = StringField(max_length=50, required=True)
    custZip = StringField(max_length=10, required=True)
    custPhone = StringField(max_length=10, required=True)
    creditType = StringField(max_length=10, required=True)
    creditId = StringField(max_length=16, required=True)
    creditEXP = DateTimeField(required=True)
    shipCity = StringField(max_length=50, required=True)
    shipDistrict = StringField(max_length=50, required=True)
    shipStreet = StringField(max_length=50, required=True)
    shipZip = StringField(max_length=10, required=True)
    dateEntered = DateTimeField(required=True)
    users = ListField(EmbeddedDocumentField(Users))
