from django.test import Client
from test_addons import MongoTestCase
from api.include.test import create_request
from api.supplier import *
from .create_data import *
import json

class Supplier_Create_API_Test(MongoTestCase):
    CLEAR_CACHE = True

    def test_create_api(self):
        res = create_request(URL_SUPPLIER, json.dumps(CREATE_BODY))
        data = json.loads(res.content.decode())

        self.assertEqual(data['created'], True)


class Supplier_Create_Fail_API_Test(MongoTestCase):
    CLEAR_CACHE = True

    def test_create_no_data(self):
        CREATE_BODY = ""
        res = create_request(URL_SUPPLIER, CREATE_BODY)
        data = json.loads(res.content.decode())

        self.assertEqual(data['errorMsg'], ['JSON Decode error'])
        self.assertEqual(data['created'], False)

