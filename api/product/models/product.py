from mongoengine import *
from api.include.model import to_slug, timestamp_date
from api.suppliers.models import Suppliers
from api.product.models import *
import datetime
import json

class Products(Document):
    supplier = ReferenceField(Suppliers)
    name = StringField(max_length=200, required=True, unique=True)
    brand = ReferenceField(ProductBrands, required=True)
    types = ReferenceField(ProductTypes, required=True)
    description = StringField(max_length=10000, required=True)
    price = FloatField(required=True)
    picture = StringField(max_length=1000, required=True)
    date = DateTimeField(required=True, default=datetime.datetime.now())
    amount = IntField(required=True)
    size = ListField(ReferenceField(ProductSizes))
    color = ListField(ReferenceField(ProductColors))
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

        if 'color' in data:
            colors = []
            for color in data['color']:
                colors.append(ProductColors.objects(slug=color).first().id)
            field_id['color'] = colors

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
        field_id = cls.get_id_from_field(data)
        product = cls(
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
            color=field_id['color'],
            size=field_id['size']
        )
        product.save()
        return product

    @classmethod
    def update_obj(cls, slug, data):

        if 'name' in data:
            data['slug'] = to_slug(data['name'])

        field_id = cls.get_id_from_field(data)

        if field_id:
            for key in field_id:
                data[key] = field_id[key]

        product = cls.objects(slug=slug)
        product.update(**data)
        return product

    def to_realData(data):
        colors = []
        sizes = []
        supplier = Suppliers.objects(pk=data['supplier']).first().slug
        brand = ProductBrands.objects(pk=data['brand']).first().name
        types = ProductTypes.objects(pk=data['types']).first().name

        for color in data['color']:
            query = ProductColors.objects(pk=color.id).first().name
            colors.append(query)

        for size in data['size']:
            query = ProductSizes.objects(pk=size.id).first().name
            sizes.append(query)

        real_data = {
            'brand': brand,
            'types': types,
            'color': colors,
            'supplier': supplier,
            'size': sizes
        }

        return real_data

    @classmethod
    def mapID_to_obj(cls, product):
        data = {
            'brand': product.brand.id,
            'types': product.types.id,
            'color': product.color,
            'size': product.size,
            'supplier' : product.supplier.id
        }
        real_data = cls.to_realData(data)

        obj = {
            'name' : product.name,
            'description' : product.description,
            'price' : product.price,
            'picture' : product.picture,
            'amount' : product.amount,
            'is_available' : product.is_available,
            'is_discount' : product.is_discount,
            'discountPercent' : product.discountPercent,
            'slug' : product.slug,
            'date' : timestamp_date(product.date),
            'brand' : real_data['brand'],
            'types' : real_data['types'],
            'color' : real_data['color'],
            'size' : real_data['size'],
            'supplier': real_data['supplier']
        }
        return obj

    @classmethod
    def map_referenceID(cls, products):
        output = []
        if not hasattr(products, 'count'):
            obj = cls.mapID_to_obj(products)
            return json.dumps(obj)
        else:
            for product in products:
                obj = cls.mapID_to_obj(product)
                output.append(obj)
            return json.dumps(output)
