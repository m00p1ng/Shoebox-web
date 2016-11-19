from django.test import Client
from test_addons import MongoTestCase
from api.include.test import create_request
from .create_data import *
import json

class productSize_Delete_API_Test(MongoTestCase):
    CLEAR_CACHE = True

    def test_delete_api(self):
        create_request(URL_SIZE, CREATE_BODY)

        c = Client()
        res = c.delete(URL_SIZE_NAME)
        data = json.loads(res.content.decode())

        self.assertEqual(data['deleted'], True)


class productSize_Delete_Fail_API_Test(MongoTestCase):
    CLEAR_CACHE = True

    def test_delete_size_not_exist(self):
        URL_SIZE_NAME = '/api/product/size/36'
        create_request(URL_SIZE, CREATE_BODY)

        c = Client()
        res = c.delete(URL_SIZE_NAME)
        data = json.loads(res.content.decode())

        self.assertEqual(data['deleted'], False)
