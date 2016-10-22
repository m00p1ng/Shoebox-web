from django.db import models
from mongoengine import *

# Create your models here.

class Orders(Document):
    custId = ObjectIdField()
    empId = ObjectIdField()
    promoId = ObjectIdField()
    shipperId = ObjectIdField()
    timeStamp = DateTimeField(required=True, default=datetime.datetime.now) 
    totolprice = IntField(required=True)
    shipDate = DateTimeField(required=True)
    payments = ListField(EmbeddedDocumentField(Payments))
    Paid = BooleanField(required=True)

class Payments(EmbeddedDocument):
    payMethod = StringField(max_length=10,required=True)
    allowed = BooleanField(required=True)

class OrderGroup(Document):
    ordId = ObjectIdField()
    prodId = ObjectIdField()
    price = IntField()
    quantity = IntField()
    shipDate = DateTimeField()
