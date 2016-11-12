from django.test import Client
from test_addons import MongoTestCase
from api.include.test import create_request
from .create_test_database import *
import json

class Product_Search_API_Test(MongoTestCase):
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
    def test_search_api(self):
        create_test_database()
        create_request(self.URL, self.CREATE_BODY)

        c = Client()
        res = c.get(self.URL_PRODUCT)
        data = json.loads(res.content.decode())

        self.assertEqual(data['name'], 'shoe')
        self.assertEqual(data['brand'], 'nike')
        self.assertEqual(data['price'], 20.0)
        self.assertEqual(data['is_available'], True)


class Product_Search_Fail_API_Test(MongoTestCase):
    CLEAR_CACHE = True

    URL = '/api/product'
    URL_SEARCH = '/api/product/name/shoe'
    
    def test_search_no_product(self):
        c = Client()
        res = c.get(self.URL_SEARCH)

        self.assertEqual(res.content.decode(), 'Not found')

