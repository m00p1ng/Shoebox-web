from mongoengine import *
from mongoengine.django.auth import User
from api.include.model import timestamp_date, timestamp_fulldate
import datetime
import json

class Employees(User):
    firstname = StringField(max_length=50, required=True)
    lastname = StringField(max_length=50, required=True)
    gender = StringField(max_length=10, required=True)
    birthday = DateTimeField(required=True)
    city = StringField(max_length=50, required=True)
    district = StringField(max_length=50, required=True)
    street = StringField(max_length=50, required=True)
    zipcode = StringField(max_length=20, required=True)
    phone = StringField(max_length=20, required=True)
    role = StringField(max_length=20, required=True, default="employee")
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
        if 'phone' not in data:
            err.append('Phone cannot empty')
        return err

    @classmethod
    def create_obj(cls, data):
        print(User.objects.count())
        employee = cls(
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
            phone = data['phone'],
            is_staff=True
        )
        if 'picture' in data:
            employee.picture = data['picture']
        employee.set_password(data['password'])
        employee.save()

        return employee


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

        employee = cls.objects(username=username)
        employee.update(**data)
        return employee


    def map_data_to_dict(employee):
        obj = {
            'username': employee.username,
            'email': employee.email,
            'firstname': employee.firstname,
            'lastname': employee.lastname,
            'gender': employee.gender,
            'birthday': timestamp_date(employee.birthday),
            'picture': employee.picture,
            'address': {
                'city': employee.city,
                'district': employee.district,
                'street': employee.street,
                'zipcode': employee.zipcode
            },
            'phone': employee.phone,
            'date_joined': timestamp_fulldate(employee.date_joined),
            'role': employee.role,
            'is_active': employee.is_active,
            'last_login': timestamp_fulldate(employee.last_login)
        }
        return obj

    @classmethod
    def map_to_json(cls, employees, data='none'):
        output = []
        if not hasattr(employees, 'count'):
            obj = cls.map_data_to_dict(employees)
            return json.dumps(obj)
        else:
            for employee in employees:
                obj = cls.map_data_to_dict(employee)
                output.append(obj)
            return json.dumps(output)
