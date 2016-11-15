from django.test import Client
from test_addons import MongoTestCase
from api.include.test import create_request
from .create_body import *
import json

class Promotion_Search_API_Test(MongoTestCase):
    CLEAR_CACHE = True

    def test_search_api(self):
        create_request(URL, json.dumps(CREATE_BODY))

        c = Client()
        res = c.get(URL_NAME)
        data = json.loads(res.content.decode())

        self.assertEqual(data['name'], 'FREE')
        self.assertEqual(data['cutpercent'], 100)


class Promotion_Search_Fail_API_Test(MongoTestCase):
    CLEAR_CACHE = True

    URL = '/api/promotion'
    URL_SEARCH = '/api/promotion/cut'


    def test_search_no_promotion(self):
        c = Client()
        res = c.get(self.URL_SEARCH)

        self.assertEqual(res.content.decode(), 'Not found')

