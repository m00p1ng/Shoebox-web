from mongoengine import *
from ecom.include.model import to_slug

class ProductTypes(Document):
    name = StringField(max_length=100, required=True, unique=True)
    is_active = BooleanField(required=True, default=True)
    slug= StringField(max_length=100, required=True, unique=True)

    @classmethod
    def create_obj(cls, data):
        productType = cls(
            name=data['name'],
            is_active=data['is_active'],
            slug=to_slug(data['name'])
        )
        productType.save()
        return productType

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
        if 'is_active' not in data:
            err.append('is_active cannot empty')
        return err
