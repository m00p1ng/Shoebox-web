from mongoengine import *
from .functions import to_slug
from ecom.suppliers.models import Suppliers
from ecom.product.models import *
import datetime

class Products(Document):
    supplierID = ReferenceField(Suppliers)
    name = StringField(max_length=200, required=True, unique=True)
    productBrandID = ReferenceField(ProductBrands, required=True)
    productTypeID = ReferenceField(ProductTypes, required=True)
    description = StringField(max_length=10000, required=True)
    price = FloatField(required=True)
    picture = StringField(max_length=1000, required=True)
    date = DateTimeField(required=True)
    amount = IntField(required=True)
    productSizeID = ListField(ReferenceField(ProductSizes))
    productColorID = ListField(ReferenceField(ProductColors))
    is_available = BooleanField(required=True)
    is_discount = BooleanField(required=True)
    discountPercent = FloatField(required=True, default=0)
    slug = StringField(max_length=200, required=True, unique=True)

    def get_id_from_field(data):
        field_id = {}
        brand = ProductBrands.objects(slug=data['brand']).first().id
        types = ProductTypes.objects(slug=data['types']).first().id
        colors = []
        sizes = []
        for color in data['color']:
            colors.append(ProductColors.objects(slug=color).first().id)
        for size in data['size']:
            sizes.append(ProductSizes.objects(slug=size).first().id)
        field_id['brand'] = brand
        field_id['types'] = types
        field_id['color'] = colors
        field_id['size'] = sizes
        return field_id

    def validation(data):
        err = []
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
        if 'date' not in data:
            err.append('Date cannot empty')
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
        field_id = get_id_from_field(data)
        product = cls(
            # supplierID=data['supplierID'],
            name=data['name'],
            description=data['description'],
            price=data['price'],
            picture=data['picture'],
            date=datetime.datetime(
                year=data['date']['year'],
                month=data['date']['month'],
                day=data['date']['day']
            ),
            amount=data['amount'],
            is_available=data['is_available'],
            is_discount=data['is_discount'],
            discountPercent=data['discountPercent'],
            slug=to_slug(data['name']),
            productBrandID=field_id['brand'],
            productTypeID=field_id['types'],
            productColorID=field_id['color'],
            proudctSizeID=field_id['size']
        )
        product.save()
        return product

    @classmethod
    def update_obj(cls, slug, data):
        if 'date' in data:
            data['date'] = datetime.datetime(
                                year=data['date']['year'],
                                month=data['date']['month'],
                                day=data['date']['day']
                            )
        if 'name' in data:
            data['slug'] = to_slug(data['name'])

        product = cls.objects(slug=slug)
        product.update(**data)
        return product
