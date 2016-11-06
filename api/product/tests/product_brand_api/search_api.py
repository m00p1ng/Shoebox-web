from django.test import Client
from test_addons import MongoTestCase
from api.include.api import create_request
import json

json_type = "application/json"

class productBrand_Search_API_Test(MongoTestCase):
    CLEAR_CACHE = True

    URL = '/api/product/brand'
    URL_BRAND = '/api/product/brand/nike'
    CREATE_BODY = """{ "name": "nike" }"""


    def test_search_api(self):
        create_request(self.URL, self.CREATE_BODY)

        c = Client()
        res = c.get(self.URL_BRAND)
        data = json.loads(res.content.decode())

        self.assertEqual(data['name'], 'nike')
        self.assertEqual(data['is_active'], True)
