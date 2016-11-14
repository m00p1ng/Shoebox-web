from django.test import Client
from test_addons import MongoTestCase
from api.include.test import create_request
from .create_test_database import *
import json

class orderDetail_Delete_API_Test(MongoTestCase):
    CLEAR_CACHE = True

    URL = '/api/order/detail'
    URL_ORDER_DETAIL = '/api/order/detail/0001'
    CREATE_BODY = {
        'orderNumber': '0001',
        'quantity': '5',
        'product': 'shoe',
        'promotion': 'cutcutcut'
    }


    def test_delete_api(self):
        create_test_database()
        create_request(self.URL, json.dumps(self.CREATE_BODY))

        c = Client()
        res = c.delete(self.URL_ORDER_DETAIL)
        data = json.loads(res.content.decode())

        self.assertEqual(data['deleted'], True)


class orderDetail_Delete_Fail_API_Test(MongoTestCase):
    CLEAR_CACHE = True


    def test_delete_order_not_exist(self):
        URL_ORDER_DETAIL = '/api/order/detail/0001'

        c = Client()
        res = c.delete(URL_ORDER_DETAIL)
        data = json.loads(res.content.decode())

        self.assertEqual(data['deleted'], False)
