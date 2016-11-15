from django.test import Client
from test_addons import MongoTestCase
from api.include.test import create_request
from .create_data import *
import json

class Supplier_Search_API_Test(MongoTestCase):
    CLEAR_CACHE = True

    def test_search_api(self):
        create_request(URL_SUPPLIER, json.dumps(CREATE_BODY))

        c = Client()
        res = c.get(URL_SUPPLIER_NAME)
        data = json.loads(res.content.decode())

        self.assertEqual(data['name'], 'Nike')


class Supplier_Search_Fail_API_Test(MongoTestCase):
    CLEAR_CACHE = True
    URL_SEARCH = '/api/supplier/name/bata'

    def test_create_no_name(self):
        c = Client()
        res = c.get(self.URL_SEARCH)

        self.assertEqual(res.content.decode(), 'Not found')
