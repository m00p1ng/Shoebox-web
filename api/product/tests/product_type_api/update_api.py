from test_addons import MongoTestCase
from api.include.test import create_request, update_request
import json

class productType_Update_API_Test(MongoTestCase):
    CLEAR_CACHE = True

    URL = '/api/product/type'
    URL_TYPE = '/api/product/type/running'
    CREATE_BODY = """{ "name": "running" }"""


    def test_update_api(self):
        create_request(self.URL, self.CREATE_BODY)

        UPDATE_BODY = """{"name": "walking"}"""

        res = update_request(self.URL_TYPE, UPDATE_BODY)
        data = json.loads(res.content.decode())

        self.assertEqual(data['updated'], True)

class productType_Update_Fail_API_Test(MongoTestCase):
    CLEAR_CACHE = True

    URL = '/api/product/type'
    URL_TYPE = '/api/product/type/running'
    CREATE_BODY = """{ "name": "running" }"""

    def test_update_no_item(self):
        UPDATE_BODY = """{"name": "walking"}"""

        res = update_request(self.URL_TYPE, UPDATE_BODY)
        data = json.loads(res.content.decode())

        self.assertEqual(data['errorMsg'], ['This productType not exist'])
        self.assertEqual(data['updated'], False)


    def test_update_no_data(self):
        UPDATE_BODY = "{}"

        create_request(self.URL, self.CREATE_BODY)
        res = update_request(self.URL_TYPE, UPDATE_BODY)
        data = json.loads(res.content.decode())

        self.assertEqual(data['errorMsg'], ['Data cannot empty'])
        self.assertEqual(data['updated'], False)


    def test_update_JSON_error(self):
        UPDATE_BODY = ""

        create_request(self.URL, self.CREATE_BODY)
        res = update_request(self.URL_TYPE, UPDATE_BODY)
        data = json.loads(res.content.decode())

        self.assertEqual(data['errorMsg'], ['JSON Decode error'])
        self.assertEqual(data['updated'], False)
