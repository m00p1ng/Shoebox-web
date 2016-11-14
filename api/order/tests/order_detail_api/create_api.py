from test_addons import MongoTestCase
from .create_test_database import *
from api.include.test import create_request
import json

class orderDetail_Create_API_Test(MongoTestCase):
    CLEAR_CACHE = True

    URL = '/api/order/detail'
    CREATE_BODY = {
        'orderNumber': '0001',
        'quantity': '5',
        'product': 'shoe',
        'promotion': 'cutcutcut'
    }

    def test_create_api(self):
        create_test_database()
        res = create_request(self.URL, json.dumps(self.CREATE_BODY))
        data = json.loads(res.content.decode())

        self.assertEqual(data['created'], True)


class orderDetail_Create_Fail_API_Test(MongoTestCase):
    CLEAR_CACHE = True

    URL = '/api/order/detail'

    def test_create_missing_data(self):
        create_test_database()
        CREATE_BODY = {
            'product': 'shoe',
            'promotion': 'cutcutcut'
        }
        res = create_request(self.URL, json.dumps(CREATE_BODY))
        data = json.loads(res.content.decode())

        self.assertEqual(data['errorMsg'], ['orderNumber cannot empty','Quantity cannot empty'])
        self.assertEqual(data['created'], False)


    def test_create_no_data(self):
        create_test_database()
        CREATE_BODY = ""
        res = create_request(self.URL, CREATE_BODY)
        data = json.loads(res.content.decode())

        self.assertEqual(data['errorMsg'], ['JSON Decode error'])
        self.assertEqual(data['created'], False)


    def test_create_product_dubplicated(self):
        create_test_database()
        CREATE_BODY = {
            'orderNumber': '0001',
            'quantity': '5',
            'product': 'shoe',
            'promotion': 'cutcutcut'
        }

        create_request(self.URL, json.dumps(CREATE_BODY))
        res = create_request(self.URL, json.dumps(CREATE_BODY))
        data = json.loads(res.content.decode())

        self.assertEqual(data['errorMsg'], ['OrderDetail already exist'])
        self.assertEqual(data['created'], False)
