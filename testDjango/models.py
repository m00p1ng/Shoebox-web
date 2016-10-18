from django.db import models
from mongoengine import *

# Create your models here.

class TestDB(Document):
    test = StringField(max_length=1000)
