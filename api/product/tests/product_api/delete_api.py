from django.test import Client
from test_addons import MongoTestCase
from api.include.test import create_request
from .create_test_database import *
import json

class Product_Delete_API_Test(MongoTestCase):
    CLEAR_CACHE = True

    URL = '/api/product'
    URL_PRODUCT = '/api/product/name/shoe'
    CREATE_BODY = """
        {
            "name": "shoe",
            "supplier": "nike",
            "brand": "nike",
            "types": "running",
            "description": "product description",
            "price": 20,
            "picture": "picture URL",
            "amount": 20,
            "size": ["48"],
            "color": ["red"],
            "is_available": true,
            "is_discount": false,
            "discountPercent": 20
        }
    """


    def test_delete_api(self):
        create_test_database()
        create_request(self.URL, self.CREATE_BODY)

        c = Client()
        res = c.delete(self.URL_PRODUCT)
        data = json.loads(res.content.decode())

        self.assertEqual(data['deleted'], True)


class Product_Delete_Fail_API_Test(MongoTestCase):
    CLEAR_CACHE = True


    def test_delete_brand_not_exist(self):
        URL_PRODUCT = '/api/product/name/shoe'

        c = Client()
        res = c.delete(URL_PRODUCT)
        data = json.loads(res.content.decode())

        self.assertEqual(data['deleted'], False)
