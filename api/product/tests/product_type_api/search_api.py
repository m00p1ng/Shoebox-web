from django.test import Client
from test_addons import MongoTestCase
from api.include.test import create_request
from .create_data import *
import json

class productType_Search_API_Test(MongoTestCase):
    CLEAR_CACHE = True

    def test_search_api(self):
        create_request(URL_TYPE, CREATE_BODY)

        c = Client()
        res = c.get(URL_TYPE_NAME)
        data = json.loads(res.content.decode())

        self.assertEqual(data['name'], 'running')
        self.assertEqual(data['is_active'], True)


class productType_Search_Fail_API_Test(MongoTestCase):
    CLEAR_CACHE = True
    URL_SEARCH = '/api/product/type/soccer'

    def test_search_no_size(self):
        c = Client()
        res = c.get(self.URL_SEARCH)

        self.assertEqual(res.content.decode(), 'Not found')
