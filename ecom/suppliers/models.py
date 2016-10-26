from mongoengine import *
from ecom.include.model import to_slug, timestamp_date
import datetime

class Suppliers(Document):
    companyName = StringField(max_length=50, required=True, unique=True)
    contactFirstname = StringField(max_length=50, required=True)
    contactLastname = StringField(max_length=10, required=True)
    contactTitle = StringField(max_length=150, required=True)
    city = StringField(max_length=50, required=True)
    district = StringField(max_length=50, required=True)
    street = StringField(max_length=50, required=True)
    zipcode = StringField(max_length=10, required=True)
    phone = StringField(max_length=20, required=True)
    email = EmailField(max_length=50, required=True)
    slug = StringField(max_length=200, required=True, unique=True)

    @staticmethod
    def validation(data):
        err = []
        if 'companyName' not in data:
            err.append('Supplier name cannot empty')
        if 'contactFirstname' not in data:
            err.append('Contact firstname cannot empty')
        if 'contactLastname' not in data:
            err.append('Contact lastname cannot empty')
        if 'contactTitle' not in data:
            err.append('Contact title cannot empty')
        if 'address' not in data:
            err.append('Address cannot empty')
            err.append('- City cannot empty')
            err.append('- District cannot empty')
            err.append('- Street cannot empty')
            err.append('- Zipcode cannot empty')
        else:
            if not {'city', 'district', 'street', 'zipcode'} <= set(data['address']):
                err.append('Address cannot empty')
                if 'city' not in data['address']:
                    err.append('- City year cannot empty')
                if 'district' not in data['address']:
                    err.append('- District month cannot empty')
                if 'street' not in data['address']:
                    err.append('- Street day cannot empty')
                if 'zipcode' not in data['address']:
                    err.append('- Zipcode day cannot empty')
        if 'phone' not in data:
            err.append('Phone number cannot empty')
        if 'email' not in data:
            err.append('Email cannot empty')

        return err

    @classmethod
    def create_obj(cls, data):
       supplier = cls(
           companyName=data['companyName'],
           contactFirstname=data['contactFirstname'],
           contactLastname=data['contactLastname'],
           contactTitle=data['contactTitle'],
           city=data['address']['city'],
           district=data['address']['district'],
           street=data['address']['street'],
           zipcode=data['address']['zipcode'],
           phone=data['phone'],
           email=data['email'],
           slug=to_slug(data['companyName'])
       )
       supplier.save()
       return supplier

    @classmethod
    def update_obj(cls, slug, data):
        if 'address' in data:
            if 'city' in data['address']:
                data['city'] = data['address']['city']
            if 'district' in data['address']:
                data['district'] = data['district']['city']
            if 'street' in data['address']:
                data['street'] = data['address']['street']
            if 'zipcode' in data['address']:
                data['zipcode'] = data['address']['zipcode']
            data.pop('address')

        if 'companyName' in data:
            data['slug'] = to_slug(data['companyName'])

        supplier = cls.objects(slug=slug)
        supplier.update(**data)
        return supplier

