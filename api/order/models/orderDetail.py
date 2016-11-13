from mongoengine import *
from api.product.models import Products
from api.promotion.models import Promotions
from api.order.models import Orders
import json

class OrderDetails(Document):
    orderID = ReferenceField(Orders)
    product = ReferenceField(Products)
    price = IntField(required=True)
    quantity = IntField(required=True)
    promotion = ReferenceField(Promotions)
    totalprice = FloatField(required=True)
    orderNumber = StringField(max_length=20,required=True,unique=True)


    def get_id_from_field(data):
        field_id = {}

        if 'promotion' in data:
            promotion = Promotions.objects(slug=data['promotion']).first().id
            field_id['promotion'] = promotion

        if 'orderNumber' in data:
            orderNumber = Orders.objects(orderNumber=data['orderNumber']).first().id
            field_id['orderID'] = orderNumber

        if 'product' in data:
            product = Products.objects(slug=data['product']).first().id
            field_id['product'] = product
        return field_id

    @staticmethod
    def validation(data):
        err = []
        if 'orderNumber' not in data:
            err.append('orderNumber cannot empty')
        if 'quantity' not in data:
            err.append('Quantity cannot empty')
        if 'product' not in data:
            err.append('Product cannot empty')
        if 'promotion' not in data:
            err.append('Promotion cannot empty')
        return err

    @classmethod
    def create_obj(cls, data):
        productprice = Products.objects(slug=data['product']).first().price
        cutpercent = Promotions.objects(slug=data['promotion']).first().cutpercent
        discountpercent = Products.objects(slug=data['product']).first().discountPercent
        discount = productprice*(cutpercent/100)*(discountpercent/100)
        field_id = cls.get_id_from_field(data)
        orderDetail = cls(
            quantity=data['quantity'],
            orderID=field_id['orderID'],
            price=productprice,
            totalprice = float(data['quantity'])*(productprice-discount),
            product=field_id['product'],
            promotion=field_id['promotion'],
            orderNumber = data['orderNumber'],
        )
        orderDetail.save()
        return orderDetail


    @classmethod
    def update_obj(cls, orderNumber, data):
        order = cls.objects(orderNumber=orderNumber)
        order.update(**data)
        return order


    def to_realData(data):
        product = Products.objects(pk=data['product']).first().name
        promotion = Promotions.objects(pk=data['promotion']).first().name

        real_data = {
            'product': product,
            'promotion': promotion
        }
        return real_data


    @classmethod
    def mapID_to_obj(cls, orderDetail):
        data = {
            'product': orderDetail.product.id,
            'promotion': orderDetail.promotion.id
        }
        real_data = cls.to_realData(data)

        orderid = str(orderDetail.orderID.id)
        obj = {
            'orderID' : orderid,
            'product' : real_data['product'],
            'price' : orderDetail.price,
            'quantity' : orderDetail.quantity,
            'promotion' : real_data['promotion'],
            'totalprice' : orderDetail.totalprice,
            'orderNumber' : orderDetail.orderNumber
        }
        return obj


    @classmethod
    def map_referenceID(cls, orderDetails):
        output = []
        if not hasattr(orderDetails, 'count'):
            obj = cls.mapID_to_obj(orderDetails)
            return json.dumps(obj)
        else:
            for orderDetail in orderDetails:
                obj = cls.mapID_to_obj(orderDetail)
                output.append(obj)
            return json.dumps(output)
