from django.test import Client
from test_addons import MongoTestCase
from api.include.test import create_request
from .create_body import *
import json

class customer_Delete_API_Test(MongoTestCase):
    CLEAR_CACHE = True

    def test_delete_api(self):
        create_request(URL_CUSTOMER, CREATE_BODY)

        c = Client()
        res = c.delete(URL_CUSTOMER_USERNAME)
        data = json.loads(res.content.decode())

        self.assertEqual(data['deleted'], True)


class customer_Delete_Fail_API_Test(MongoTestCase):
    CLEAR_CACHE = True

    def test_delete_customer_not_exist(self):

        c = Client()
        res = c.delete(URL_CUSTOMER_USERNAME)
        data = json.loads(res.content.decode())

        self.assertEqual(data['deleted'], False)
