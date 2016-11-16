from mongoengine import *
from api.include.model import to_slug


class OrderIDs(Document):
    orderID = IntField(unique=True,default=0)


    @classmethod
    def create_obj(cls):
        orderID = cls()
        orderID.save()
        return orderID


    @classmethod
    def update_obj(cls):
        orderID = cls.objects.all().first()
        ID = orderID.orderID+1
        orderID.update(orderID=ID)
        return orderID
