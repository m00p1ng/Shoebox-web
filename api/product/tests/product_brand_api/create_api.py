from django.test import Client
from test_addons import MongoTestCase
from api.product.models import productBrand
import json

json_type = "application/json"

class productBrand_Create_API_Test(MongoTestCase):
    CLEAR_CACHE = True

    URL = '/api/product/brand'
    URL_BRAND = '/api/product/brand/nike'
    CREATE_BODY = """{ "name": "nike" }"""

    def test_create_api(self):
        c = Client()
        res = c.post(self.URL, data=self.CREATE_BODY, content_type=json_type)
        data = json.loads(res.content.decode())

        self.assertEqual(data['created'], True)


class productBrand_Create_Fail_API_Test(MongoTestCase):
    CLEAR_CACHE = True

    URL = '/api/product/brand'

    def test_create_no_name_api(self):
        CREATE_BODY = """{}"""
        c = Client()
        res = c.post(self.URL, data=CREATE_BODY, content_type=json_type)
        data = json.loads(res.content.decode())

        self.assertEqual(data['errorMsg'], ['Name cannot empty'])
        self.assertEqual(data['created'], False)

    def test_create_no_data_api(self):
        CREATE_BODY = ""
        c = Client()
        res = c.post(self.URL, data=CREATE_BODY, content_type=json_type)
        data = json.loads(res.content.decode())

        self.assertEqual(data['errorMsg'], ['JSON Decode error'])
        self.assertEqual(data['created'], False)

    def test_create_brand_exist_api(self):
        CREATE_BODY = """{"name": "Nike"}"""
        c = Client()
        c.post(self.URL, data=CREATE_BODY, content_type=json_type)

        c = Client()
        res = c.post(self.URL, data=CREATE_BODY, content_type=json_type)
        data = json.loads(res.content.decode())

        self.assertEqual(data['errorMsg'], ['Brand already exist'])
        self.assertEqual(data['created'], False)
