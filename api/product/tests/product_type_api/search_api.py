from django.test import Client
from test_addons import MongoTestCase
from api.include.test import create_request
import json

class productType_Search_API_Test(MongoTestCase):
    CLEAR_CACHE = True

    URL = '/api/product/type'
    URL_TYPE = '/api/product/type/running'
    CREATE_BODY = """{ "name": "running" }"""


    def test_search_api(self):
        create_request(self.URL, self.CREATE_BODY)

        c = Client()
        res = c.get(self.URL_TYPE)
        data = json.loads(res.content.decode())

        self.assertEqual(data['name'], 'running')
        self.assertEqual(data['is_active'], True)