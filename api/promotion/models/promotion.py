from mongoengine import *
from api.include.model import to_slug
import datetime

class Promotions(Document):
    name = StringField(max_length=200, required=True, unique=True)
    cutpercent = IntField(required=True)
    dateStart = DateTimeField(required=True)
    dateEnd = DateTimeField(required=True)
    slug = StringField(max_length=200, required=True, unique=True)

    @staticmethod
    def validation(data):
        err = []
        if 'name' not in data:
            err.append('Promotion name cannot empty')
        if 'cutpercent' not in data:
            err.append('Price cut cannot empty')
        if 'dateStart' not in data:
            err.append('Start date cannot empty')
            err.append('- Start year cannot empty')
            err.append('- Start month cannot empty')
            err.append('- Start day cannot empty')
        else:
            if not {'year', 'month', 'day'} <= set(data['dateStart']):
                err.append('Start date cannot empty')
                if 'year' not in data['date']:
                    err.append('- Start year cannot empty')
                if 'month' not in data['date']:
                    err.append('- Start month cannot empty')
                if 'day' not in data['date']:
                    err.append('- Start day cannot empty')
        if 'dateEnd' not in data:
            err.append('End date cannot empty')
            err.append('- End year cannot empty')
            err.append('- End month cannot empty')
            err.append('- End day cannot empty')
        else:
            if not {'year', 'month', 'day'} <= set(data['dateEnd']):
                err.append('End date cannot empty')
                if 'year' not in data['date']:
                    err.append('- End year cannot empty')
                if 'month' not in data['date']:
                    err.append('- End month cannot empty')
                if 'day' not in data['date']:
                    err.append('- End day cannot empty')
        return err

    @classmethod
    def create_obj(cls, data):
       promotion = cls(
           name=data['name'],
           cutpercent=data['cutpercent'],
           dateStart=datetime.datetime(
               year=data['dateStart']['year'],
               month=data['dateStart']['month'],
               day=data['dateStart']['day']
           ),
           dateEnd=datetime.datetime(
               year=data['dateEnd']['year'],
               month=data['dateEnd']['month'],
               day=data['dateEnd']['day']
           ),
           slug=to_slug(data['name'])
       )
       promotion.save()
       return promotion

    @classmethod
    def update_obj(cls, slug, data):
        if 'dateStart' in data:
            data['dateStart'] = datetime.datetime(
                year=data['dateStart']['year'],
                month=data['dateStart']['month'],
                day=data['dateStart']['day']
            )

        if 'dateEnd' in data:
            data['dateEnd'] = datetime.datetime(
                year=data['dateEnd']['year'],
                month=data['dateEnd']['month'],
                day=data['dateEnd']['day']
            )

        if 'name' in data:
            data['slug'] = to_slug(data['name'])

        promotion = cls.objects(slug=slug)
        promotion.update(**data)
        return promotion
