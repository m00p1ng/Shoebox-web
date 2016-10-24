from mongoengine import *
from mongoengine.django.auth import User
import datetime


class UserRoles(Document):
    name = StringField(max_length=20, required=True)
    is_active = BooleanField(required=True)

class UserInfo(Document):
    firstname = StringField(max_length=50, required=True)
    lastname = StringField(max_length=50, required=True)
    gender = StringField(max_length=10, required=True)
    birthday = DateTimeField(required=True)
    city = StringField(max_length=50, required=True)
    district = StringField(max_length=50, required=True)
    street = StringField(max_length=50, required=True)
    zipcode = StringField(max_length=10, required=True)
    phone = StringField(max_length=10, required=True)

class Users(User):
    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = ['email', 'password', 'date_joined', 'is_active']

    userRoleID = ReferenceField(UserRoles, required=True)
    userInfoID = ReferenceField(UserInfo, required=True)
