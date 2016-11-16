from mongoengine import *

class Cart(EmbeddedDocument):
    product = StringField(required=True)
    qty = IntField(required=True)
    price = IntField(required=True)
    subtotal = FloatField(required=True)

    @staticmethod
    def validation(data):
        err = []
        if 'product' not in data:
            err.append('Total cannot empty')
        if 'qty' not in data:
            err.append('Qty cannot empty')
        if 'price' not in data:
            err.append('Price cannot empty')
        if 'subtotal' not in data:
            err.append('Subtotal cannot empty')
        return err


    @classmethod
    def create_obj(cls, data):
        cart = cls(
            product = data['product'],
            qty = data['qty'],
            price = data['price'],
            subtotal = data['subtotal']
        )
        return cart
