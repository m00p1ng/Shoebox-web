from django.test import Client
from test_addons import MongoTestCase
from api.product.models import productColor
import json

json_type = "application/json"

class productColor_Create_API_Test(MongoTestCase):
    CLEAR_CACHE = True

    URL = '/api/product/color'
    URL_COLOR = '/api/product/color/white'
    CREATE_BODY = """{ "name": "white" }"""

    def test_create_api(self):
        c = Client()
        res = c.post(self.URL, data=self.CREATE_BODY, content_type=json_type)
        data = json.loads(res.content.decode())

        self.assertEqual(data['created'], True)

class productColor_Create_Fail_API_Test(MongoTestCase):
    CLEAR_CACHE = True

    URL = '/api/product/color'

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

    def test_create_color_exist_api(self):
        CREATE_BODY = """{"name": "White"}"""
        c = Client()
        c.post(self.URL, data=CREATE_BODY, content_type=json_type)
        res = c.post(self.URL, data=CREATE_BODY, content_type=json_type)
        data = json.loads(res.content.decode())
        self.assertEqual(data['errorMsg'], ['Color already exist'])
        self.assertEqual(data['created'], False)
