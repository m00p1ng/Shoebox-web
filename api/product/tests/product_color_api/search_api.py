from django.test import Client
from test_addons import MongoTestCase
from api.include.test import create_request
import json

class productColor_Search_API_Test(MongoTestCase):
    CLEAR_CACHE = True

    URL = '/api/product/color'
    URL_COLOR = '/api/product/color/white'
    CREATE_BODY = """{ "name": "white" }"""


    def test_search_api(self):
        create_request(self.URL, self.CREATE_BODY)

        c = Client()
        res = c.get(self.URL_COLOR)
        data = json.loads(res.content.decode())

        self.assertEqual(data['name'], 'white')
        self.assertEqual(data['is_active'], True)


class productColor_Search_Fail_API_Test(MongoTestCase):
    CLEAR_CACHE = True

    URL = '/api/product/color'
    URL_SEARCH = '/api/product/color/green'
    CREATE_BODY = """{ "name": "green" }"""
    
    def test_search_no_color(self):
        c = Client()
        res = c.get(self.URL_SEARCH)

        self.assertEqual(res.content.decode(), 'Not found')

