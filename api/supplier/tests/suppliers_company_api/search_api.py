from django.test import Client
from test_addons import MongoTestCase
from api.include.test import create_request
import json

class productBrand_Search_API_Test(MongoTestCase):
    CLEAR_CACHE = True

    URL = '/api/product/brand'
    URL_SIZE = '/api/product/brand/nike'
    CREATE_BODY = """{ "name": "nike" }"""


    def test_search_api(self):
        create_request(self.URL, self.CREATE_BODY)

        c = Client()
        res = c.get(self.URL_SIZE)
        data = json.loads(res.content.decode())

        self.assertEqual(data['name'], 'nike')
        self.assertEqual(data['is_active'], True)


class productBrand_Search_Fail_API_Test(MongoTestCase):
    CLEAR_CACHE = True

    URL = '/api/product/brand'
    URL_SEARCH = '/api/product/brand/Bata'
    CREATE_BODY = """{ "name": "Bata" }"""
    
    def test_create_no_name(self):
        c = Client()
        res = c.get(self.URL_SEARCH)

        self.assertEqual(res.content.decode(), 'Not found')
