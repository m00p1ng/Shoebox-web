from django.test import Client
from test_addons import MongoTestCase
from api.include.test import create_request
from .create_test_database import *
import json

class Product_Delete_API_Test(MongoTestCase):
    CLEAR_CACHE = True

    def test_delete_api(self):
        create_test_database()
        create_request(URL_PRODUCT, CREATE_BODY)

        c = Client()
        res = c.delete(URL_PRODUCT_NAME)
        data = json.loads(res.content.decode())

        self.assertEqual(data['deleted'], True)


class Product_Delete_Fail_API_Test(MongoTestCase):
    CLEAR_CACHE = True

    def test_delete_brand_not_exist(self):
        c = Client()
        res = c.delete(URL_PRODUCT_NAME)
        data = json.loads(res.content.decode())

        self.assertEqual(data['deleted'], False)
