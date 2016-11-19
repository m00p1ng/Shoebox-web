from mongoengine import *
from api.product.models import Products

class Cart(EmbeddedDocument):
    product = ReferenceField(Products)
    qty = IntField(required=True)
    price = IntField(required=True)
    subtotal = FloatField(required=True)

    @staticmethod
    def validation(data):
        err = []
        if 'product' in data:
            amount = Products.objects(slug=data['product']).first().amount
            if data['qty'] > amount:
                err.append('Order qty more than stock available')
        if 'product' not in data:
            err.append('Total cannot empty')
        if 'qty' not in data:
            err.append('Qty cannot empty')
        if 'price' not in data:
            err.append('Price cannot empty')
        if 'subtotal' not in data:
            err.append('Subtotal cannot empty')
        return err


    def get_id_from_field(data):
        field_id = {}

        if 'product' in data:
            product = Products.objects(slug=data['product']).first().id
            field_id['product'] = product

        return field_id


    def to_realData(data):
        product = Products.objects(pk=data['product']).first().name

        real_data = {'product' : product}
        
        return real_data


    @classmethod
    def mapID_to_obj(cls, cart):
        data = {'product': cart.product.id}

        real_data = cls.to_realData(data)

        obj = {
            'product' : real_data['product'],
            'qty' : cart.qty,
            'price' : cart.price,
            'subtotal' : cart.subtotal
        }

        return obj


    @classmethod
    def create_obj(cls, data):
        field_id = cls.get_id_from_field(data)
        cart = cls(
            product = field_id['product'],
            qty = data['qty'],
            price = data['price'],
            subtotal = data['subtotal']
        )

        Products.update_obj(data['product'],data)
        return cart
