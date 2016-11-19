from .create_data import *
from django.test import Client
from test_addons import MongoTestCase
from api.include.test import create_request
import json

class productBrand_Search_API_Test(MongoTestCase):
    CLEAR_CACHE = True

    def test_search_api(self):
        create_request(URL_BRAND, CREATE_BODY)

        c = Client()
        res = c.get(URL_BRAND_NAME)
        data = json.loads(res.content.decode())

        self.assertEqual(data['name'], 'nike')
        self.assertEqual(data['is_active'], True)


class productBrand_Search_Fail_API_Test(MongoTestCase):
    CLEAR_CACHE = True
    URL_SEARCH = '/api/product/brand/Bata'

    def test_search_no_brand(self):
        c = Client()
        res = c.get(self.URL_SEARCH)

        self.assertEqual(res.content.decode(), 'Not found')
