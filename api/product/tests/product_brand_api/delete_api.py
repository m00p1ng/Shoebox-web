from .create_data import *
from django.test import Client
from test_addons import MongoTestCase
from api.include.test import create_request
import json

class productBrand_Delete_API_Test(MongoTestCase):
    CLEAR_CACHE = True

    URL = '/api/product/brand'
    URL_BRAND = '/api/product/brand/nike'
    CREATE_BODY = create_data()


    def test_delete_api(self):
        create_request(self.URL, json.dumps(self.CREATE_BODY))

        c = Client()
        res = c.delete(self.URL_BRAND)
        data = json.loads(res.content.decode())

        self.assertEqual(data['deleted'], True)


class productBrand_Delete_Fail_API_Test(MongoTestCase):
    CLEAR_CACHE = True

    URL = '/api/product/brand'
    URL_BRAND = '/api/product/brand/nike'
    CREATE_BODY = create_data()

    def test_delete_brand_not_exist(self):
        URL_BRAND = '/api/product/brand/nike2'
        create_request(self.URL, json.dumps(self.CREATE_BODY))

        c = Client()
        res = c.delete(URL_BRAND)
        data = json.loads(res.content.decode())

        self.assertEqual(data['deleted'], False)
