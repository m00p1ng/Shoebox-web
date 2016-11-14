from test_addons import MongoTestCase
from api.include.test import create_request, update_request
from .create_test_database import *
import json

class orderDetail_Update_API_Test(MongoTestCase):
    CLEAR_CACHE = True

    URL = '/api/order/detail'
    URL_ORDER_DETAIL = '/api/order/detail/0001'
    CREATE_BODY = {
        'orderNumber': '0001',
        'quantity': '5',
        'product': 'shoe',
        'promotion': 'cutcutcut'
    }


    def test_update_api(self):
        create_test_database()
        create_request(self.URL, json.dumps(self.CREATE_BODY))

        UPDATE_BODY = {'quantity': '10'}

        res = update_request(self.URL_ORDER_DETAIL, json.dumps(UPDATE_BODY))
        data = json.loads(res.content.decode())

        self.assertEqual(data['updated'], True)


class Order_Update_Fail_API_Test(MongoTestCase):
    CLEAR_CACHE = True

    URL = '/api/order/detail'
    URL_ORDER_DETAIL = '/api/order/detail/0001'
    CREATE_BODY = {
        'orderNumber': '0001',
        'quantity': '5',
        'product': 'shoe',
        'promotion': 'cutcutcut'
    }

    def test_update_api(self):
        create_test_database()

        UPDATE_BODY = {'quantity': 20}

        res = update_request(self.URL_ORDER_DETAIL, json.dumps(UPDATE_BODY))
        data = json.loads(res.content.decode())

        self.assertEqual(data['updated'], False)


    def test_update_no_data(self):
        create_test_database()
        create_request(self.URL, json.dumps(self.CREATE_BODY))

        UPDATE_BODY = {}

        res = update_request(self.URL_ORDER_DETAIL, json.dumps(UPDATE_BODY))
        data = json.loads(res.content.decode())

        self.assertEqual(data['errorMsg'], ['Data cannot empty'])
        self.assertEqual(data['updated'], False)


    def test_update_JSON_error(self):
        create_test_database()
        create_request(self.URL, json.dumps(self.CREATE_BODY))

        UPDATE_BODY = ""

        res = update_request(self.URL_ORDER_DETAIL, UPDATE_BODY)
        data = json.loads(res.content.decode())

        self.assertEqual(data['errorMsg'], ['JSON Decode error'])
        self.assertEqual(data['updated'], False)

