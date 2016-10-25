from mongoengine import *

class UserRoles(Document):
    role = StringField(max_length=20, required=True, unique=True)
    is_active = BooleanField(required=True)

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
            err.append('Role cannot empty')
        if 'is_active' not in data:
            err.append('is_active cannot empty')
        return err
