from django.test import Client
from test_addons import MongoTestCase
from api.include.test import create_request
from .create_data import *
import json

class Supplier_Delete_API_Test(MongoTestCase):
    CLEAR_CACHE = True

    def test_delete_api(self):
        create_request(URL_SUPPLIER, json.dumps(CREATE_BODY))

        c = Client()
        res = c.delete(URL_SUPPLIER_NAME)
        data = json.loads(res.content.decode())

        self.assertEqual(data['deleted'], True)


class Supplier_Delete_Fail_Api_Test(MongoTestCase):
    clear_cache = True

    def test_delete_color_not_exist(self):
        URL_SUPPLIER_NAME = '/api/supplier/name/nike2'

        c = Client()
        res = c.delete(URL_SUPPLIER_NAME)
        data = json.loads(res.content.decode())

        self.assertEqual(data['deleted'], False)
