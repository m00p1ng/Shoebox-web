from django.test import Client
from test_addons import MongoTestCase
from api.include.test import create_request
from .create_data import *
import json

class productSize_Search_API_Test(MongoTestCase):
    CLEAR_CACHE = True
    CREATE_BODY = json.dumps({ "name": "48" })

    def test_search_api(self):
        create_request(URL_SIZE, CREATE_BODY)

        c = Client()
        res = c.get(URL_SIZE_NAME)
        data = json.loads(res.content.decode())

        self.assertEqual(data['name'], '48')
        self.assertEqual(data['is_active'], True)


class productSize_Search_Fail_API_Test(MongoTestCase):
    CLEAR_CACHE = True
    URL_SEARCH = '/api/product/size/213'

    def test_search_no_size(self):
        c = Client()
        res = c.get(self.URL_SEARCH)

        self.assertEqual(res.content.decode(), 'Not found')
