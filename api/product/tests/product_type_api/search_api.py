from django.test import Client
from test_addons import MongoTestCase
from api.include.test import create_request
import json

class productType_Search_API_Test(MongoTestCase):
    CLEAR_CACHE = True

    URL = '/api/product/type'
    URL_SIZE = '/api/product/type/running'
    CREATE_BODY = """{ "name": "running" }"""


    def test_search_api(self):
        create_request(self.URL, self.CREATE_BODY)

        c = Client()
        res = c.get(self.URL_SIZE)
        data = json.loads(res.content.decode())

        self.assertEqual(data['name'], 'running')
        self.assertEqual(data['is_active'], True)


class productType_Search_Fail_API_Test(MongoTestCase):
    CLEAR_CACHE = True

    URL = '/api/product/type'
    URL_SEARCH = '/api/product/type/soccer'
    CREATE_BODY = """{ "name": "soccer" }"""
    
    def test_create_no_name(self):
        c = Client()
        res = c.get(self.URL_SEARCH)

        self.assertEqual(res.content.decode(), 'Not found')

