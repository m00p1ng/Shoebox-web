from django.test import Client
from test_addons import MongoTestCase
from api.include.test import create_request
import json

class productType_Delete_API_Test(MongoTestCase):
    CLEAR_CACHE = True

    URL = '/api/product/type'
    URL_TYPE = '/api/product/type/running'
    CREATE_BODY = """{ "name": "running" }"""


    def test_delete_api(self):
        create_request(self.URL, self.CREATE_BODY)

        c = Client()
        res = c.delete(self.URL_TYPE)
        data = json.loads(res.content.decode())

        self.assertEqual(data['deleted'], True)


class productType_Delete_Fail_API_Test(MongoTestCase):
    CLEAR_CACHE = True

    URL = '/api/product/type'
    URL_TYPE = '/api/product/type/running'
    CREATE_BODY = """{ "name": "running" }"""

    def test_delete_type_not_exist(self):
        URL_TYPE = '/api/product/type/walking'
        create_request(self.URL, self.CREATE_BODY)

        c = Client()
        res = c.delete(URL_TYPE)
        data = json.loads(res.content.decode())

        self.assertEqual(data['deleted'], False)
