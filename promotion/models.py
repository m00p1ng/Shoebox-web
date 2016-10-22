from django.db import models
from mongoengine import *

# Create your models here.

class Promotions(Document):
    name = StringField(max_length=100, required=True)
    cutprice = IntField(required=True)
    dateStart = DateTimeField(required=True)
    dateEnd = DateTimeField(required=True)
