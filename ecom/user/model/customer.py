from mongoengine import *
from mongoengine.django.auth import User
import datetime

class Customers(User):
    firstname = StringField(max_length=50)
    lastname = StringField(max_length=50)
    gender = StringField(max_length=10)
    birthday = DateTimeField()
    city = StringField(max_length=50)
    district = StringField(max_length=50)
    street = StringField(max_length=50)
    zipcode = StringField(max_length=10)
    phone = StringField(max_length=10)
    role = StringField(max_length=20, required=True, default="customer")
    creditType = StringField(max_length=10, required=True)
    creditID = StringField(max_length=16, required=True)
    creditEXP = DateTimeField(required=True)
    shipCity = StringField(max_length=50, required=True)
    shipDistrict = StringField(max_length=50, required=True)
    shipStreet = StringField(max_length=50, required=True)
    shipZipcode = StringField(max_length=10, required=True)

    def validation(data):
        err = []
        if 'username' not in data:
            err.append('Username cannot empty')
        if 'password' not in data:
            err.append('Password cannot empty')
        if 'repassword' not in data:
            err.append('Re password cannot empty')
        if 'password' in data and 'repassword' in data:
            if not data['password'] == data['repassword']:
                err.append('Password didn\'t match')
        if 'email' not in data:
            err.append('Email cannot empty')
        if 'firstname' not in data:
            err.append('Firstname cannot empyty')
        if 'lastname' not in data:
            err.append('Lastname cannot empty')
        if 'gender' not in data:
            err.append('Gender cannot empty')
        if 'birthday' not in data:
            err.append('Birthday cannot empty')
        if 'address' not in data:
            err.append('Address cannot empty')
        if 'ship' not in data:
            err.append('Ship address cannot empty')
        if 'credit' not in data:
            err.append('Credit card cannot empty')
        if 'phone' not in data:
            err.append('Phone cannot empty')
        return err

    @classmethod
    def create_obj(cls, data):
        email = data['email']
        if email is not None:
            try:
                email_name, domain_part = email.strip().split('@', 1)
            except ValueError:
                pass
            else:
                email = '@'.join([email_name, domain_part.lower()])

        customer = cls(
            username = data['username'],
            email = data['email'],
            firstname = data['firstname'],
            lastname = data['lastname'],
            gender = data['gender'],
            birthday = datetime.datetime(
                year = data['birthday']['year'],
                month = data['birthday']['month'],
                day = data['birthday']['day']
            ),
            city = data['address']['city'],
            district = data['address']['district'],
            street = data['address']['street'],
            zipcode = data['address']['zipcode'],
            shipCity = data['ship']['city'],
            shipDistrict = data['ship']['district'],
            shipStreet = data['ship']['street'],
            shipZipcode = data['ship']['zipcode'],
            creditID = data['credit']['id'],
            creditType = data['credit']['type'],
            creditEXP = datetime.datetime(
                year = data['credit']['exp']['year'],
                month = data['credit']['exp']['month'],
                day = 1
            ),
            phone = data['phone']
        )
        customer.set_password(data['password'])
        customer.save()

        return customer

        @classmethod
        def update_obj(cls, username, data):
            pass
