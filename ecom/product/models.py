from mongoengine import *
from ecom.suppliers.models import Suppliers

class ProductTypes(Document):
    name = StringField(max_length=100, required=True, unique=True)
    is_active = BooleanField(required=True, default=True)
    slug= StringField(max_length=100, required=True, unique=True)

class ProductBrands(Document):
    name = StringField(max_length=100, required=True, unique=True)
    is_active = BooleanField(required=True, default=True)
    slug= StringField(max_length=100, required=True, unique=True)

class ProductSizes(Document):
    name = StringField(max_length=100, required=True, unique=True)
    is_active = BooleanField(required=True, default=True)
    slug= StringField(max_length=100, required=True, unique=True)

class ProductColors(Document):
    name = StringField(max_length=100, required=True, unique=True)
    is_active = BooleanField(required=True, default=True)
    slug= StringField(max_length=100, required=True, unique=True)

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
