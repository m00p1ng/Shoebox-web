from mongoengine import *
from api.include.model import to_slug
from api.supplier.models import Companies
import json

class Suppliers(Document):
    company = ReferenceField(Companies, required=True)
    contactFirstname = StringField(max_length=50, required=True)
    contactLastname = StringField(max_length=50, required=True)
    contactTitle = StringField(max_length=50, required=True)
    email = StringField(max_length=59, required=True)
    phone = StringField(max_length=20, required=True)
    slug = StringField(max_length=150, required=True, unique=True)

    def get_id_from_field(data):
        field_id = {}

        if 'company' in data:
            company = Companies.objects(slug=data['company']).first().id
            field_id['company'] = company

        return field_id

    @staticmethod
    def validation(data):
        err = []
        if 'contactFirstname' not in data:
            err.append('Contact firstname cannot empty')
        if 'contactLastname' not in data:
            err.append('Contact lastname cannot empty')
        if 'contactTitle' not in data:
            err.append('Contact title cannot empty')
        if 'email' not in data:
            err.append('Email cannot empty')
        if 'phone' not in data:
            err.append('Phone number cannot empty')
        return err

    @classmethod
    def create_obj(cls, data):
        uniqueName = data['contactFirstname']+" "+data['contactLastname']
        field_id = cls.get_id_from_field(data)
        supplier = cls(
            contactFirstname=data['contactFirstname'],
            contactLastname=data['contactLastname'],
            contactTitle=data['contactTitle'],
            email=data['email'],
            phone=data['phone'],
            slug=to_slug(uniqueName),
            company=field_id['company']
        )
        supplier.save()
        return supplier

    @classmethod
    def update_obj(cls, slug, data):

        if 'contactFirstname' in data or 'contactLastname' in data:
            uniqueName = data['contactFirstname']+" "+data['contactLastname']
            data['slug'] = to_slug(uniqueName)

        field_id = cls.get_id_from_field(data)

        if field_id:
            for key in field_id:
                data[key] = field_id[key]

        supplier = cls.objects(slug=slug)
        supplier.update(**data)
        return supplier

    def to_realData(data):
        company = Companies.objects(pk=data['company']).first().name

        real_data = {
            'company': company
        }

        return real_data

    @classmethod
    def mapID_to_obj(cls, supplier):
        data = {
            'company': supplier.company.id,
        }
        real_data = cls.to_realData(data)

        obj = {
            'contactFirstname' : supplier.contactFirstname,
            'contactLastname' : supplier.contactLastname,
            'contactTitle' : supplier.contactTitle,
            'email' : supplier.email,
            'phone' : supplier.phone,
            'slug' : supplier.slug,
            'company' : real_data['company']
        }
        return obj

    @classmethod
    def map_referenceID(cls, suppliers):
        output = []
        if not hasattr(suppliers, 'count'):
            obj = cls.mapID_to_obj(suppliers)
            return json.dumps(obj)
        else:
            for supplier in suppliers:
                obj = cls.mapID_to_obj(supplier)
                output.append(obj)
            return json.dumps(output)
