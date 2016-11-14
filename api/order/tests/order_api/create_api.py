from test_addons import MongoTestCase
from .create_test_database import *
from api.include.test import create_request
import json

class Order_Create_API_Test(MongoTestCase):
    CLEAR_CACHE = True

    URL = '/api/order'
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

    def test_create_api(self):
        create_test_database()
        res = create_request(self.URL, json.dumps(self.CREATE_BODY))
        data = json.loads(res.content.decode())

        self.assertEqual(data['created'], True)


class Order_Create_Fail_API_Test(MongoTestCase):
    CLEAR_CACHE = True

    URL = '/api/order'

    def test_create_missing_data(self):
        create_test_database()
        CREATE_BODY = {
            'date': {
                'year': 2000,
                'month': 10,
                'day': 10
            },
            'orderNumber': ['0001']
        }
        res = create_request(self.URL, json.dumps(CREATE_BODY))
        data = json.loads(res.content.decode())

        self.assertEqual(data['errorMsg'], ['orderID cannot empty','Customers cannot empty','Status cannot empty'])
        self.assertEqual(data['created'], False)


    def test_create_no_data(self):
        create_test_database()
        CREATE_BODY = ""

        res = create_request(self.URL, CREATE_BODY)
        data = json.loads(res.content.decode())

        self.assertEqual(data['errorMsg'], ['JSON Decode error'])
        self.assertEqual(data['created'], False)


    def test_create_order_dubplicated(self):
        create_test_database()
        CREATE_BODY = {
            'orderID': '0123456789',
            'customer': 'mooping12345',
            'date': {
                'year': 2000,
                'month': 10,
                'day': 10
            },
            'status': False,
            'orderNumber': ['0001']
        }

        create_request(self.URL, json.dumps(CREATE_BODY))
        res = create_request(self.URL, json.dumps(CREATE_BODY))
        data = json.loads(res.content.decode())

        self.assertEqual(data['errorMsg'], ['Order already exist'])
        self.assertEqual(data['created'], False)
