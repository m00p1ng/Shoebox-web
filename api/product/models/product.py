from mongoengine import *
from api.include.model import to_slug, timestamp_date
from api.supplier.models import Suppliers
from api.product.models import *
import datetime
import json
import math

class Products(Document):
    productID = IntField(min_value=1, required=True)
    supplier = ReferenceField(Suppliers)
    name = StringField(max_length=200, required=True, unique=True)
    brand = ReferenceField(ProductBrands, required=True)
    types = ReferenceField(ProductTypes, required=True)
    description = StringField(max_length=10000, required=True)
    price = FloatField(required=True)
    picture = StringField(max_length=1000, required=True)
    date = DateTimeField(required=True, default=datetime.datetime.now)
    amount = IntField(required=True)
    size = ListField(ReferenceField(ProductSizes))
    color = StringField(max_length=50,required=True)
    is_available = BooleanField(required=True)
    is_discount = BooleanField(required=True)
    discountPercent = FloatField(required=True, default=0)
    slug = StringField(max_length=200, required=True, unique=True)
    sold_unit = IntField(required=True, default=0)
    number_of_views = IntField(required=True, default=0)


    def get_id_from_field(data):
        field_id = {}
        if 'supplier' in data:
            supplier = Suppliers.objects(slug=data['supplier']).first().id
            field_id['supplier'] = supplier

        if 'brand' in data:
            brand = ProductBrands.objects(slug=data['brand']).first().id
            field_id['brand'] = brand

        if 'types' in data:
            types = ProductTypes.objects(slug=data['types']).first().id
            field_id['types'] = types

        if 'size' in data:
            sizes = []
            for size in data['size']:
                sizes.append(ProductSizes.objects(slug=size).first().id)
            field_id['size'] = sizes

        return field_id


    @staticmethod
    def validation(data):
        err = []
        if 'supplier' not in data:
            err.append('Supplier cannot empty')
        if 'name' not in data:
            err.append('Name cannot empty')
        if 'brand' not in data:
            err.append('Brand cannot empty')
        if 'types' not in data:
            err.append('Types cannot empty')
        if 'description' not in data:
            err.append('Description cannot empty')
        if 'price' not in data:
            err.append('Price cannot empty')
        if 'picture' not in data:
            err.append('Picture cannot empty')
        if 'amount' not in data:
            err.append('Amount cannot empty')
        if 'size' not in data:
            err.append('Size cannot empty')
        if 'color' not in data:
            err.append('Color cannot empty')
        if 'is_available' not in data:
            err.append('is_available cannot empty')
        if 'is_discount' not in data:
            err.append('is_discount cannot empty')
        if 'discountPercent' not in data:
            err.append('discountPercent cannot empty')
        return err


    @classmethod
    def create_obj(cls, data):
        productID = cls.objects.count() + 1
        field_id = cls.get_id_from_field(data)
        product = cls(
            productID = productID,
            supplier=field_id['supplier'],
            name=data['name'],
            description=data['description'],
            price=data['price'],
            picture=data['picture'],
            amount=data['amount'],
            is_available=data['is_available'],
            is_discount=data['is_discount'],
            discountPercent=data['discountPercent'],
            slug=to_slug(data['name']),
            brand=field_id['brand'],
            types=field_id['types'],
            color=data['color'],
            size=field_id['size']
        )
        product.save()
        return product


    @classmethod
    def update_obj(cls, slug, data):
        qty = 0
        product = cls.objects(slug=slug).first()
        if 'qty' in data:
            qty = data['qty']
            data = {}
            data['amount'] = product.amount - qty
            data['sold_unit'] = product.sold_unit + qty


        if 'name' in data:
            data['slug'] = to_slug(data['name'])

        field_id = cls.get_id_from_field(data)

        if field_id:
            for key in field_id:
                data[key] = field_id[key]

        data['number_of_views'] = product.number_of_views + 1

        product.update(**data)
        return product


    @classmethod
    def mapID_to_obj(cls, product, function='none', data='none'):
        data_id = {
            'brand': product.brand.id,
            'types': product.types.id,
            'size': product.size,
            'supplier' : product.supplier.id
        }
        real_data = cls.to_realData(data_id)

        return real_data


    def to_realData(data):
        sizes = []
        supplier = Suppliers.objects(pk=data['supplier']).first().name
        brand = ProductBrands.objects(pk=data['brand']).first().name
        types = ProductTypes.objects(pk=data['types']).first().name
        types = ProductTypes.objects(pk=data['types']).first().slug

        for size in data['size']:
            query = ProductSizes.objects(pk=size.id).first().slug
            sizes.append(query)

        real_data = {
            'supplier': supplier,
            'brand': brand,
            'types': types,
            'supplier': supplier,
            'size': sizes
        }

        return real_data


    def page_data(cls, data, products, function):
        if data['is_result'] is True or data['is_page'] is True:
            totalpage = math.ceil(Products.objects.count() / int(data['result']))
            totalproduct = Products.objects.count()
            dataArr = []

            if function is 'customer':
                for product in products:
                    real_data = cls.mapID_to_obj(product)
                    dataArr.append(cls.customer_product_view(product, real_data))

            elif function is 'search':
               for product in products:
                   real_data = cls.mapID_to_obj(product)
                   dataArr.append(cls.search_product_view(product, real_data))

            else:
               for product in products:
                   real_data = cls.mapID_to_obj(product)
                   dataArr.append(cls.employee_product_view(product, real_data))

            if function is 'brand':
                totalproduct = products.count()
                totalpage = math.ceil(totalproduct / int(data['result']))
            obj = {
                'totalpage': totalpage,
                'page': int(data['page']),
                'data': dataArr,
                'totalproduct' : totalproduct
            }

        else:
            obj = []
            if function is 'single':
                real_data = cls.mapID_to_obj(products)
                obj = cls.employee_product_view(products, real_data)
                return obj

            elif function is 'search':
                for product in products:
                    real_data = cls.mapID_to_obj(product)
                    obj.append(cls.search_product_view(product, real_data))
            else:
               for product in products:
                   real_data = cls.mapID_to_obj(product)
                   obj.append(cls.employee_product_view(product, real_data))
        return obj


    def product_sort_by_view(product, real_data):
        obj = {
            'name' : product.name,
            'price' : product.price,
            'is_discount' : product.is_discount,
            'discountPercent' : product.discountPercent,
            'size' : real_data['size'],
        }

        return obj


    def search_product_view(product, real_data):
        obj = {
            'slug': product.slug,
            'picture': product.picture,
            'brand': real_data['brand'],
            'name' : product.name,
            'price' : product.price,
            'amount' : product.amount
        }
        return obj



    def employee_product_view(product, real_data):
        obj = {
            'name' : product.name,
            'description' : product.description,
            'price' : product.price,
            'productID' : product.productID,
            'picture' : product.picture,
            'amount' : product.amount,
            'color' : product.color,
            'is_available' : product.is_available,
            'is_discount' : product.is_discount,
            'discountPercent' : product.discountPercent,
            'sold_unit' : product.sold_unit,
            'number_of_views' : product.number_of_views,
            'slug' : product.slug,
            'date' : timestamp_date(product.date),
            'brand' : real_data['brand'],
            'types' : real_data['types'],
            'size' : real_data['size'],
            'supplier': real_data['supplier']
        }
        return obj


    @classmethod
    def map_referenceID(cls, products, function='none', data='none'):
        output = []
        if not hasattr(products, 'count'):
            obj = cls.page_data(cls, data, products, function='single')
            return json.dumps(obj)
        else:
            obj = cls.page_data(cls, data, products, function)
            return json.dumps(obj)
