from test_addons import MongoTestCase
from api.include.test import create_request, update_request
import json

class productBrand_Update_API_Test(MongoTestCase):
    CLEAR_CACHE = True

    URL = '/api/product/brand'
    URL_BRAND = '/api/product/brand/nike'
    CREATE_BODY = """{ "name": "nike" }"""


    def test_update_api(self):
        create_request(self.URL, self.CREATE_BODY)

        UPDATE_BODY = """{"name": "nike2"}"""

        res = update_request(self.URL_BRAND, UPDATE_BODY)
        data = json.loads(res.content.decode())

        self.assertEqual(data['updated'], True)

class productBrand_Update_Fail_API_Test(MongoTestCase):
    CLEAR_CACHE = True

    URL = '/api/product/brand'
    URL_BRAND = '/api/product/brand/nike'
    CREATE_BODY = """{ "name": "nike" }"""

    def test_update_no_item(self):
        UPDATE_BODY = """{"name": "nike2"}"""

        res = update_request(self.URL_BRAND, UPDATE_BODY)
        data = json.loads(res.content.decode())

        self.assertEqual(data['errorMsg'], ['This productBrand not exist'])
        self.assertEqual(data['updated'], False)


    def test_update_no_data(self):
        UPDATE_BODY = "{}"

        create_request(self.URL, self.CREATE_BODY)
        res = update_request(self.URL_BRAND, UPDATE_BODY)
        data = json.loads(res.content.decode())

        self.assertEqual(data['errorMsg'], ['Data cannot empty'])
        self.assertEqual(data['updated'], False)


    def test_update_JSON_error(self):
        UPDATE_BODY = ""

        create_request(self.URL, self.CREATE_BODY)
        res = update_request(self.URL_BRAND, UPDATE_BODY)
        data = json.loads(res.content.decode())

        self.assertEqual(data['errorMsg'], ['JSON Decode error'])
        self.assertEqual(data['updated'], False)
