from django.test import Client
from test_addons import MongoTestCase
from api.include.test import create_request
from .create_test_database import *
import json

class Product_Search_API_Test(MongoTestCase):
    CLEAR_CACHE = True

    URL = '/api/order/detail'
    URL_ORDER_DETAIL = '/api/order/detail/0001'
    CREATE_BODY = {
        'orderNumber': '0001',
        'quantity': '5',
        'product': 'shoe',
        'promotion': 'cutcutcut'
    }


    def test_search_api(self):
        create_test_database()
        create_request(self.URL, json.dumps(self.CREATE_BODY))

        c = Client()
        res = c.get(self.URL_ORDER_DETAIL)
        data = json.loads(res.content.decode())

        self.assertEqual(data['orderNumber'], '0001')


class Product_Search_Fail_API_Test(MongoTestCase):
    CLEAR_CACHE = True

    URL = '/api/order/detail'
    URL_SEARCH = '/api/order/detail/0001'
    
    def test_search_no_product(self):
        c = Client()
        res = c.get(self.URL_SEARCH)

        self.assertEqual(res.content.decode(), 'Not found')

