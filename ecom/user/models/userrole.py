from mongoengine import *
from collections import defaultdict

class UserRoles(Document):
    role = StringField(max_length=20, required=True, unique=True)
    is_active = BooleanField(required=True, default=True)

    @classmethod
    def create_obj(cls, data):
        userrole = cls(
            role=data['role'].lower(),
            is_active=data['is_active'],
        )
        userrole.save()
        return role

    @classmethod
    def update_obj(cls, role, data):
        userrole = cls.objects(role=role)
        userrole.update(**data)
        return userrole

    def validation(data):
        err = []
        if 'role' not in data:
            err['role'].append('Role cannot empty')
        return err
