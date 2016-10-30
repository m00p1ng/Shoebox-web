# from mongoengine import *
# from api.product.models import product
# from api.promotion.models import promotion
# from api.order.models import order

# class OrderDetails(Document):
#     orderID = ReferenceField(Orders)
#     product = ReferenceField(Products)
#     price = IntField(required=True)
#     quantity = IntField(required=True)
#     promotion = ReferenceField(Promotion)
#     totalprice = IntField(required=True)


#     def get_id_from_field(data):
#         field_id = {}

#         if 'promotion' in data:
#             promotion = Promotions.objects(slug=data['promotion']).first().id
#             field_id['promotion'] = promotion

#         if 'product' in data:
#             product = Products.objects(slug=data['product']).first().id
#             field_id['product'] = product

#         if 'orderID' in data:
#             orderID = Orders.objects(id=data['orderID']).first().id
#             field_id['orderID'] = orderID

#         if 'orderNumber' in data:
#             orderNumber = Orders.objects(id=data['order']).first().id
#             field_id['orderID'] = orderID
#         return field_id

#     @staticmethod
#     def validation(data):
#         err = []
#         if 'quantity' not in data:
#             err.append('Quantity cannot empty')
#         return err

#     @classmethod
#     def create_obj(cls, data):
#         field_id = cls.get_id_from_field(data)
#         orderDetail = cls(
#             # supplier=field_id['supplier'],
#             orderNumber=data['orderNumber'],
#             description=data['description'],
#             price=data['price'],
#             picture=data['picture'],
#             date=datetime.datetime(
#                 year=data['date']['year'],
#                 month=data['date']['month'],
#                 day=data['date']['day']
#             ),
#             amount=data['amount'],
#             is_available=data['is_available'],
#             is_discount=data['is_discount'],
#             discountPercent=data['discountPercent'],
#             slug=to_slug(data['name']),
#             brand=field_id['brand'],
#             types=field_id['types'],
#             color=field_id['color'],
#             size=field_id['size']
#         )
#         orderDetail.save()
#         return orderDetail

#     @classmethod
#     def update_obj(cls, slug, data):
#         if 'date' in data:
#             data['date'] = datetime.datetime(
#                 year=data['date']['year'],
#                 month=data['date']['month'],
#                 day=data['date']['day']
#             )

#         if 'name' in data:
#             data['slug'] = to_slug(data['name'])

#         field_id = cls.get_id_from_field(data)

#         if field_id:
#             for key in field_id:
#                 data[key] = field_id[key]

#         product = cls.objects(slug=slug)
#         product.update(**data)
#         return product

#     def to_realData(data):
#         colors = []
#         sizes = []
#         # supplier = Suppliers.objects(pk=data['supplier']).first().name
#         brand = ProductBrands.objects(pk=data['brand']).first().name
#         types = ProductTypes.objects(pk=data['types']).first().name

#         for color in data['color']:
#             query = ProductColors.objects(pk=color.id).first().name
#             colors.append(query)

#         for size in data['size']:
#             query = ProductSizes.objects(pk=size.id).first().name
#             sizes.append(query)

#         real_data = {
#             'brand': brand,
#             'types': types,
#             'color': colors,
#             'size': sizes
#         }

#         return real_data

#     @classmethod
#     def mapID_to_obj(cls, product):
#         data = {
#             'brand': product.brand.id,
#             'types': product.types.id,
#             'color': product.color,
#             'size': product.size
#             # 'supplier' : product.supplier
#         }
#         real_data = cls.to_realData(data)

#         obj = {
#             'name' : product.name,
#             'description' : product.description,
#             'price' : product.price,
#             'picture' : product.picture,
#             'amount' : product.amount,
#             'is_available' : product.is_available,
#             'is_discount' : product.is_discount,
#             'discountPercent' : product.discountPercent,
#             'slug' : product.slug,
#             'date' : timestamp_date(product.date),
#             'brand' : real_data['brand'],
#             'types' : real_data['types'],
#             'color' : real_data['color'],
#             'size' : real_data['size'],
#             # obj['supplier'] = real_data['supplier']
#         }
#         return obj

#     @classmethod
#     def map_referenceID(cls, products):
#         output = []
#         if not hasattr(products, 'count'):
#             obj = cls.mapID_to_obj(products)
#             return json.dumps(obj)
#         else:
#             for product in products:
#                 obj = cls.mapID_to_obj(product)
#                 output.append(obj)
#             return json.dumps(output)
