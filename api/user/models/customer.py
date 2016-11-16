from mongoengine import *
from mongoengine.django.auth import User
from api.include.model import timestamp_date, timestamp_fulldate
import datetime
import json

class Customers(User):
    firstname = StringField(max_length=50)
    lastname = StringField(max_length=50)
    gender = StringField(max_length=10)
    birthday = DateTimeField()
    city = StringField(max_length=50)
    district = StringField(max_length=50)
    street = StringField(max_length=50)
    zipcode = StringField(max_length=20)
    phone = StringField(max_length=20)
    role = StringField(max_length=20, required=True, default="customer")
    creditType = StringField(max_length=10, required=True)
    creditID = StringField(max_length=16, required=True)
    creditEXP = StringField(max_length=10, required=True)
    shipCity = StringField(max_length=50, required=True)
    shipDistrict = StringField(max_length=50, required=True)
    shipStreet = StringField(max_length=50, required=True)
    shipZipcode = StringField(max_length=20, required=True)
    picture = StringField(max_length=1000, required=True, default="/static/images/avatar_2x.png")

    def validation(data):
        err = []
        if 'username' not in data:
            err.append('Username cannot empty')
        else:
            if len(data['username']) < 6 or len(data['username']) > 20:
                err.append('Username must be 6-20 characters')
        if 'password' not in data:
            err.append('Password cannot empty')
        else:
            if len(data['password']) < 6:
                err.append('Password must be at least 6 characters')
        if 'repassword' not in data:
            err.append('Repassword cannot empty')
        if 'password' in data and 'repassword' in data:
            if not data['password'] == data['repassword']:
                err.append('Password didn\'t match')
        if 'email' not in data:
            err.append('Email cannot empty')
        if 'firstname' not in data:
            err.append('Firstname cannot empty')
        if 'lastname' not in data:
            err.append('Lastname cannot empty')
        if 'gender' not in data:
            err.append('Gender cannot empty')
        if 'birthday' not in data:
            err.append('Birthday cannot empty')
            err.append('Year cannot empty')
            err.append('Month cannot empty')
            err.append('Day cannot empty')
        else:
            if not {'year', 'month', 'day'} <= set(data['birthday']):
                err.append('Birthday cannot empty')
                if 'year' not in data['birthday']:
                    err.append('Year cannot empty')
                if 'month' not in data['birthday']:
                    err.append('Month cannot empty')
                if 'day' not in data['birthday']:
                    err.append('Day cannot empty')
        if 'address' not in data:
            err.append('Address cannot empty')
            err.append('City cannot empty')
            err.append('District cannot empty')
            err.append('Street cannot empty')
            err.append('Zipcode cannot empty')
        else:
            if not {'city', 'district', 'street', 'zipcode'} <= set(data['address']):
                err.append('Address cannot empty')
                if 'city' not in data['address']:
                    err.append('City cannot empty')
                if 'district' not in data['address']:
                    err.append('District cannot empty')
                if 'street' not in data['address']:
                    err.append('Street cannot empty')
                if 'zipcode' not in data['address']:
                    err.append('Zipcode cannot empty')
        if 'ship' not in data:
            err.append('Ship address cannot empty')
            err.append('City cannot empty')
            err.append('District cannot empty')
            err.append('Street cannot empty')
            err.append('Zipcode cannot empty')
        else:
            if not {'city', 'district', 'street', 'zipcode'} <= set(data['ship']):
                err.append('Ship address cannot empty')
                if 'city' not in data['ship']:
                    err.append('- City cannot empty')
                if 'district' not in data['ship']:
                    err.append('- District cannot empty')
                if 'street' not in data['ship']:
                    err.append('- Street cannot empty')
                if 'zipcode' not in data['ship']:
                    err.append('- Zipcode cannot empty')
        if 'credit' not in data:
            err.append('Credit card cannot empty')
        if 'phone' not in data:
            err.append('Phone cannot empty')
        return err


    @classmethod
    def create_obj(cls, data):
        customer = cls(
            username = data['username'],
            email = data['email'],
            firstname = data['firstname'],
            lastname = data['lastname'],
            gender = data['gender'],
            picture=data['picture'],
            birthday = datetime.datetime(
                year = int(data['birthday']['year']),
                month = int(data['birthday']['month']),
                day = int(data['birthday']['day'])
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
            creditEXP = data['credit']['exp'],
            phone = data['phone']
        )
        customer.set_password(data['password'])
        customer.save()

        return customer


    @classmethod
    def update_obj(cls, username, data):
        if 'birthday' in data:
            data['birthday'] = datetime.datetime(
                year=data['birthday']['year'],
                month=data['birthday']['month'],
                day=data['birthday']['day']
            )
            print(data['birthday'])

        if 'address' in data:
            if 'city' in data['address']:
                data['city'] = data['address']['city']
            if 'district' in data['address']:
                data['district'] = data['address']['district']
            if 'street' in data['address']:
                data['street'] = data['address']['street']
            if 'zipcode' in data['address']:
                data['zipcode'] = data['address']['zipcode']
            data.pop('address')

        if 'ship' in data:
            if 'city' in data['ship']:
                data['city'] = data['ship']['city']
            if 'district' in data['ship']:
                data['district'] = data['ship']['district']
            if 'street' in data['ship']:
                data['street'] = data['ship']['street']
            if 'zipcode' in data['ship']:
                data['zipcode'] = data['ship']['zipcode']
            data.pop('ship')

        if 'credit' in data:
            if 'id' in data['credit']:
                data['creditID'] = data['credit']['id']
            if 'type' in data['credit']:
                data['creditType'] = data['credit']['type']
            if 'exp' in data['credit']:
                data['creditEXP'] = data['credit']['exp']
            data.pop('credit')

        customer = cls.objects(username=username)
        customer.update(**data)
        return customer


    def map_data_to_dict(customer):
        obj = {
            'username': customer.username,
            'email': customer.email,
            'firstname': customer.firstname,
            'lastname': customer.lastname,
            'gender': customer.gender,
            'birthday': timestamp_date(customer.birthday),
            'picture': customer.picture,
            'address': {
                'city': customer.city,
                'district': customer.district,
                'street': customer.street,
                'zipcode': customer.zipcode
            },
            'ship': {
                'city': customer.shipCity,
                'district': customer.shipDistrict,
                'street': customer.shipStreet,
                'zipcode': customer.shipZipcode
            },
            'credit':{
                'id': customer.creditID,
                'type': customer.creditType,
                'exp': customer.creditEXP
            },
            'phone': customer.phone,
            'date_joined': timestamp_fulldate(customer.date_joined),
            'role': customer.role,
            'is_active': customer.is_active,
            'last_login': timestamp_fulldate(customer.last_login)
        }
        return obj


    @classmethod
    def map_to_json(cls, customers):
        output = []
        if not hasattr(customers, 'count'):
            obj = cls.map_data_to_dict(customers)
            return json.dumps(obj)
        else:
            for customer in customers:
                obj = cls.map_data_to_dict(customer)
                output.append(obj)
            return json.dumps(output)
