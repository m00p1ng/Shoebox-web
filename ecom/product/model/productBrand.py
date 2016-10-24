from mongoengine import *
from ecom.include.model import to_slug

class ProductBrands(Document):
    name = StringField(max_length=100, required=True, unique=True)
    is_active = BooleanField(required=True, default=True)
    slug= StringField(max_length=100, required=True, unique=True)

    @classmethod
    def create_obj(cls, data):
        productbrand = cls(
            name=data['name'],
            is_active=data['is_active'],
            slug=to_slug(data['name'])
        )
        productbrand.save()
        return productbrand

    @classmethod
    def update_obj(cls, slug, data):
        if 'name' in data:
            data['slug'] = to_slug(data['name'])
        productbrand = cls.objects(slug=slug)
        productbrand.update(**data)
        return productbrand

    def validation(data):
        err = []
        if 'name' not in data:
            err.append('Name cannot empty')
        if 'is_active' not in data:
            err.append('is_active cannot empty')
        return err
