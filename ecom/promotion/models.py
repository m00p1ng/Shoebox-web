from django.db import models
from mongoengine import *

# Create your models here.

class Promotions(Document):
    name = StringField(max_length=200, required=True, unique=True)
    cutprice = IntField(required=True)
    dateStart = DateTimeField(required=True)
    dateEnd = DateTimeField(required=True)
    slug = StringField(max_length=200, required=True, unique=True)
