from mongoengine import *
from api.include.model import to_slug
import json
import math


class Suppliers(Document):
    supplierID = IntField(min_value=1, required=True, unique=True)
    name = StringField(max_length=100, required=True, unique=True)
    city = StringField(max_length=50, required=True)
    district = StringField(max_length=50, required=True)
    street = StringField(max_length=50, required=True)
    zipcode = StringField(max_length=10, required=True)
    phone = StringField(max_length=20, required=True)
    slug = StringField(max_length=100, required=True, unique=True)


    @staticmethod
    def validation(data):
        err = []
        if 'name' not in data:
            err.append('Supplier name cannot empty')
        if 'phone' not in data:
            err.append('Phone number cannot empty')
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

        return err


    @classmethod
    def create_obj(cls, data):
       supplierID = cls.objects.count() + 1 
       supplier = cls(
           supplierID=supplierID,
           name=data['name'],
           city=data['address']['city'],
           district=data['address']['district'],
           street=data['address']['street'],
           zipcode=data['address']['zipcode'],
           phone=data['phone'],
           slug=to_slug(data['name'])
       )
       supplier.save()
       return supplier


    @classmethod
    def update_obj(cls, slug, data):
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
        if 'name' in data:
            data['slug'] = to_slug(data['name'])

        supplier = cls.objects(slug=slug)
        supplier.update(**data)
        return supplier
    

    def map_data_to_dict(supplier):
        obj = {
            'supplierID' : supplier.supplierID,
            'name' : supplier.name,
            'city' : supplier.city,
            'district' : supplier.district,
            'street' : supplier.street,
            'slug' : supplier.slug,
            'zipcode' : supplier.zipcode,
            'phone' : supplier.phone
       }
        return obj


    def page_data(cls, data, suppliers):
        if data['is_result'] is True or data['is_page'] is True:
            totalpage = math.ceil(Suppliers.objects.count() / int(data['result']))
            totalsupplier = Suppliers.objects.count()
            dataArr = []

            for supplier in suppliers:
                dataArr.append(cls.map_data_to_dict(supplier))

            obj = {
                'totalpage': totalpage,
                'page': int(data['page']),
                'data': dataArr,
                'totalsupplier' : totalsupplier
            }

        else:
            obj = []
            for supplier in suppliers:
                obj.append(cls.map_data_to_dict(supplier))

        return obj


    @classmethod
    def map_to_json(cls, suppliers, data='none'):
        output = []
        if not hasattr(suppliers, 'count'):
            obj = cls.map_data_to_dict(suppliers)
            return json.dumps(obj)
        else:
            if data is not 'none':
                obj = cls.page_data(cls, data, suppliers)
                return json.dumps(obj)
            else:
                for supplier in suppliers:
                    obj = cls.map_data_to_dict(supplier)
                    output.append(obj)
                return json.dumps(output)

