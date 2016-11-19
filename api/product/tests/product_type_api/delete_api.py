from django.test import Client
from test_addons import MongoTestCase
from api.include.test import create_request
from .create_data import *
import json

class productType_Delete_API_Test(MongoTestCase):
    CLEAR_CACHE = True

    def test_delete_api(self):
        create_request(URL_TYPE, CREATE_BODY)

        c = Client()
        res = c.delete(URL_TYPE_NAME)
        data = json.loads(res.content.decode())

        self.assertEqual(data['deleted'], True)


class productType_Delete_Fail_API_Test(MongoTestCase):
    CLEAR_CACHE = True

    def test_delete_type_not_exist(self):
        URL_TYPE_NAME = '/api/product/type/walking'
        create_request(URL_TYPE, CREATE_BODY)

        c = Client()
        res = c.delete(URL_TYPE_NAME)
        data = json.loads(res.content.decode())

        self.assertEqual(data['deleted'], False)
