from django.test import Client
from test_addons import MongoTestCase
from api.include.test import create_request
from .create_test_database import *
import json

class Order_Search_API_Test(MongoTestCase):
    CLEAR_CACHE = True

    URL = '/api/order'
    URL_ORDER = '/api/order/id/0123456789'
    CREATE_BODY = {
        'customer': 'mooping12345',
        'orderID': '0123456789',
        'date': {
            'year': 2000,
            'month': 10,
            'day': 10
        },
        'status': False,
        'orderNumber': ['0001']
    }


    def test_search_api(self):
        create_test_database()
        create_request(self.URL, json.dumps(self.CREATE_BODY))

        c = Client()
        res = c.get(self.URL_ORDER)
        data = json.loads(res.content.decode())

        self.assertEqual(data['orderID'], '0123456789')
        self.assertEqual(data['status'], False)


class Order_Search_Fail_API_Test(MongoTestCase):
    CLEAR_CACHE = True

    URL = '/api/order'
    URL_SEARCH = '/api/order/id/0123456789'   

    def test_search_no_order(self):
        c = Client()
        res = c.get(self.URL_SEARCH)

        self.assertEqual(res.content.decode(), 'Not found')

