from django.test import Client
from test_addons import MongoTestCase
from api.include.test import create_request
from .create_test_database import *
import json

class Product_Search_API_Test(MongoTestCase):
    CLEAR_CACHE = True

    def test_search_api(self):
        create_test_database()
        create_request(URL_PRODUCT, CREATE_BODY)

        c = Client()
        res = c.get(URL_PRODUCT_NAME)
        data = json.loads(res.content.decode())

        self.assertEqual(data['name'], 'shoe')
        self.assertEqual(data['brand'], 'nike')
        self.assertEqual(data['price'], 20.0)
        self.assertEqual(data['is_available'], True)


class Product_Search_Fail_API_Test(MongoTestCase):
    CLEAR_CACHE = True
    URL_SEARCH = '/api/product/name/shoe'

    def test_search_no_product(self):
        c = Client()
        res = c.get(self.URL_SEARCH)

        self.assertEqual(res.content.decode(), 'Not found')
