from django.test import Client
from test_addons import MongoTestCase
from api.include.test import create_request
import json

class productSize_Delete_API_Test(MongoTestCase):
    CLEAR_CACHE = True

    URL = '/api/product/size'
    URL_SIZE = '/api/product/size/48'
    CREATE_BODY = """{ "name": "48" }"""


    def test_delete_api(self):
        create_request(self.URL, self.CREATE_BODY)

        c = Client()
        res = c.delete(self.URL_SIZE)
        data = json.loads(res.content.decode())

        self.assertEqual(data['deleted'], True)


class productSize_Delete_Fail_API_Test(MongoTestCase):
    CLEAR_CACHE = True

    URL = '/api/product/size'
    URL_SIZE = '/api/product/size/48'
    CREATE_BODY = """{ "name": "48" }"""

    def test_delete_size_not_exist(self):
        URL_SIZE = '/api/product/size/36'
        create_request(self.URL, self.CREATE_BODY)

        c = Client()
        res = c.delete(URL_SIZE)
        data = json.loads(res.content.decode())

        self.assertEqual(data['deleted'], False)
