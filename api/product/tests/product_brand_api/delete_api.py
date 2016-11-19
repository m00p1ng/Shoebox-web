from .create_data import *
from django.test import Client
from test_addons import MongoTestCase
from api.include.test import create_request
import json

class productBrand_Delete_API_Test(MongoTestCase):
    CLEAR_CACHE = True

    def test_delete_api(self):
        create_request(URL_BRAND, CREATE_BODY)

        c = Client()
        res = c.delete(URL_BRAND_NAME)
        data = json.loads(res.content.decode())

        self.assertEqual(data['deleted'], True)


class productBrand_Delete_Fail_API_Test(MongoTestCase):
    CLEAR_CACHE = True

    def test_delete_brand_not_exist(self):
        URL_BRAND_NAME = '/api/product/brand/nike2'
        create_request(URL_BRAND, CREATE_BODY)

        c = Client()
        res = c.delete(URL_BRAND_NAME)
        data = json.loads(res.content.decode())

        self.assertEqual(data['deleted'], False)
