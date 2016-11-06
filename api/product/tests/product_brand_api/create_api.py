from django.test import Client
from test_addons import MongoTestCase
from api.include.api import create_request
import json

json_type = "application/json"

class productBrand_Create_API_Test(MongoTestCase):
    CLEAR_CACHE = True

    URL = '/api/product/brand'
    URL_BRAND = '/api/product/brand/nike'
    CREATE_BODY = """{ "name": "nike" }"""

    def test_create_api(self):
        res = create_request(self.URL, self.CREATE_BODY)
        data = json.loads(res.content.decode())

        self.assertEqual(data['created'], True)


class productBrand_Create_Fail_API_Test(MongoTestCase):
    CLEAR_CACHE = True

    URL = '/api/product/brand'

    def test_create_no_name(self):
        CREATE_BODY = """{}"""

        res = create_request(self.URL, CREATE_BODY)
        data = json.loads(res.content.decode())

        self.assertEqual(data['errorMsg'], ['Name cannot empty'])
        self.assertEqual(data['created'], False)


    def test_create_no_data(self):
        CREATE_BODY = ""

        res = create_request(self.URL, CREATE_BODY)
        data = json.loads(res.content.decode())

        self.assertEqual(data['errorMsg'], ['JSON Decode error'])
        self.assertEqual(data['created'], False)


    def test_create_brand_dubplicated(self):
        CREATE_BODY = """{"name": "Nike"}"""

        create_request(self.URL, CREATE_BODY)
        res = create_request(self.URL, CREATE_BODY)
        data = json.loads(res.content.decode())

        self.assertEqual(data['errorMsg'], ['Brand already exist'])
        self.assertEqual(data['created'], False)
