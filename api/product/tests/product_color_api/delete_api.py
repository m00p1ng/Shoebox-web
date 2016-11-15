from .create_data import *
from django.test import Client
from test_addons import MongoTestCase
from api.include.test import create_request
import json

class productColor_Delete_API_Test(MongoTestCase):
    CLEAR_CACHE = True

    def test_delete_api(self):
        create_request(URL_COLOR, json.dumps(CREATE_BODY))

        c = Client()
        res = c.delete(URL_COLOR_NAME)
        data = json.loads(res.content.decode())

        self.assertEqual(data['deleted'], True)


class productColor_Delete_Fail_API_Test(MongoTestCase):
    CLEAR_CACHE = True

    def test_delete_color_not_exist(self):
        URL_COLOR_NAME = '/api/product/color/yellow'
        create_request(URL_COLOR_NAME, json.dumps(CREATE_BODY))

        c = Client()
        res = c.delete(URL_COLOR_NAME)
        data = json.loads(res.content.decode())

        self.assertEqual(data['deleted'], False)
