from mongoengine import *
from api.include.model import to_slug

class ProductTypes(Document):
    productTypeID = IntField(min_value=1, required=True, unique=True)
    name = StringField(max_length=100, required=True, unique=True)
    is_active = BooleanField(required=True, default=True)
    slug= StringField(max_length=100, required=True, unique=True)

    @classmethod
    def create_obj(cls, data):
        data['productTypeID'] = cls.objects.count() + 1
        producttype = cls(**data)
        producttype.slug = to_slug(data['name'])
        producttype.save()
        return producttype

    @classmethod
    def update_obj(cls, slug, data):
        if 'name' in data:
            data['slug'] = to_slug(data['name'])
        producttype = cls.objects(slug=slug)
        producttype.update(**data)
        return producttype

    def validation(data):
        err = []
        if 'name' not in data:
            err.append('Name cannot empty')
        return err
