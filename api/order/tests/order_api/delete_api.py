from django.test import Client
from test_addons import MongoTestCase
from api.include.test import create_request
from .create_test_database import *
import json

class Order_Delete_API_Test(MongoTestCase):
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


    def test_delete_api(self):
        create_test_database()
        create_request(self.URL, json.dumps(self.CREATE_BODY))

        c = Client()
        res = c.delete(self.URL_ORDER)
        data = json.loads(res.content.decode())

        self.assertEqual(data['deleted'], True)


class Order_Delete_Fail_API_Test(MongoTestCase):
    CLEAR_CACHE = True


    def test_delete_order_not_exist(self):
        URL_ORDER = '/api/order/id/1111111111'

        c = Client()
        res = c.delete(URL_ORDER)
        data = json.loads(res.content.decode())

        self.assertEqual(data['deleted'], False)
