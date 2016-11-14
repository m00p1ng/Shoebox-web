from test_addons import MongoTestCase
from api.include.test import create_request, update_request
from .create_test_database import *
import json

class Order_Update_API_Test(MongoTestCase):
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


    def test_update_api(self):
        create_test_database()
        create_request(self.URL, json.dumps(self.CREATE_BODY))

        UPDATE_BODY = {'status': True}

        res = update_request(self.URL_ORDER, json.dumps(UPDATE_BODY))
        data = json.loads(res.content.decode())

        self.assertEqual(data['updated'], True)


class Order_Update_Fail_API_Test(MongoTestCase):
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

    def test_update_no_order(self):
        create_test_database()

        UPDATE_BODY = {'status': True}

        res = update_request(self.URL_ORDER, json.dumps(UPDATE_BODY))
        data = json.loads(res.content.decode())

        self.assertEqual(data['updated'], False)


    def test_update_no_data(self):
        create_test_database()
        create_request(self.URL, json.dumps(self.CREATE_BODY))

        UPDATE_BODY = {}

        res = update_request(self.URL_ORDER, json.dumps(UPDATE_BODY))
        data = json.loads(res.content.decode())

        self.assertEqual(data['errorMsg'], ['Data cannot empty'])
        self.assertEqual(data['updated'], False)


    def test_update_JSON_error(self):
        create_test_database()
        create_request(self.URL, json.dumps(self.CREATE_BODY))

        UPDATE_BODY = ""

        res = update_request(self.URL_ORDER, UPDATE_BODY)
        data = json.loads(res.content.decode())

        self.assertEqual(data['errorMsg'], ['JSON Decode error'])
        self.assertEqual(data['updated'], False)
