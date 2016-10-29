from mongoengine import *
from mongoengine.django.auth import User
from collections import defaultdict
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
        err = defaultdict(list)
        if 'username' not in data:
            err['username'].append('Username cannot empty')
        if 'password' not in data:
            err['password'].append('Password cannot empty')
        if 'repassword' not in data:
            err['password'].append('Re password cannot empty')
        if 'password' in data and 'repassword' in data:
            if not data['password'] == data['repassword']:
                err['password'].append('Password didn\'t match')
        if 'email' not in data:
            err['email'].append('Email cannot empty')
        if 'firstname' not in data:
            err['firstname'].append('Firstname cannot empyty')
        if 'lastname' not in data:
            err['lastname'].append('Lastname cannot empty')
        if 'gender' not in data:
            err['gender'].append('Gender cannot empty')
        if 'birthday' not in data:
            err['birthday'].append('Birthday cannot empty')
            err['birthday'].append('Year cannot empty')
            err['birthday'].append('Month cannot empty')
            err['birthday'].append('Day cannot empty')
        else:
            if not {'year', 'month', 'day'} <= set(data['birthday']):
                err['birthday'].append('Birthday cannot empty')
                if 'year' not in data['birthday']:
                    err['birthday'].append('Year cannot empty')
                if 'month' not in data['birthday']:
                    err['birthday'].append('Month cannot empty')
                if 'day' not in data['birthday']:
                    err['birthday'].append('Day cannot empty')
        if 'address' not in data:
            err['address'].append('Address cannot empty')
            err['address'].append('City cannot empty')
            err['address'].append('District cannot empty')
            err['address'].append('Street cannot empty')
            err['address'].append('Zipcode cannot empty')
        else:
            if not {'city', 'district', 'street', 'zipcode'} <= set(data['address']):
                err.append('Address cannot empty')
                if 'city' not in data['address']:
                    err['address'].append('City cannot empty')
                if 'district' not in data['address']:
                    err['address'].append('District cannot empty')
                if 'street' not in data['address']:
                    err['address'].append('Street cannot empty')
                if 'zipcode' not in data['address']:
                    err['address'].append('Zipcode cannot empty')
        if 'ship' not in data:
            err['ship'].append('Ship address cannot empty')
            err['ship'].append('City cannot empty')
            err['ship'].append('District cannot empty')
            err['ship'].append('Street cannot empty')
            err['ship'].append('Zipcode cannot empty')
        else:
            if not {'city', 'district', 'street', 'zipcode'} <= set(data['ship']):
                err.append('Ship address cannot empty')
                if 'city' not in data['ship']:
                    err['ship'].append('- City cannot empty')
                if 'district' not in data['ship']:
                    err['ship'].append('- District cannot empty')
                if 'street' not in data['ship']:
                    err['ship'].append('- Street cannot empty')
                if 'zipcode' not in data['ship']:
                    err['ship'].append('- Zipcode cannot empty')
        if 'credit' not in data:
            err['credit'].append('Credit card cannot empty')
        if 'phone' not in data:
            err['phone'].append('Phone cannot empty')
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
