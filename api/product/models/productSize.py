from mongoengine import *
from api.include.model import to_slug

class ProductSizes(Document):
    name = StringField(max_length=100, required=True, unique=True)
    is_active = BooleanField(required=True, default=True)
    slug= StringField(max_length=100, required=True, unique=True)

    @classmethod
    def create_obj(cls, data):
        productsize = cls(**data)
        productsize.slug = to_slug(data['name'])
        productsize.save()
        return productsize

    @classmethod
    def update_obj(cls, slug, data):
        if 'name' in data:
            data['slug'] = to_slug(data['name'])
        productsize = cls.objects(slug=slug)
        productsize.update(**data)
        return productsize

    def validation(data):
        err = []
        if 'name' not in data:
            err.append('Name cannot empty')
        return err
