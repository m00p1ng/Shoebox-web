from django.test import Client
from test_addons import MongoTestCase
from api.include.test import create_request
from api.supplier import *
import json


class Supplier_Create_API_Test(MongoTestCase):
    CLEAR_CACHE = True

    URL = '/api/supplier'
    URL_SUPPLIER = '/api/supplier/nike'
    CREATE_BODY = """
        {
            "name": "Nike",
            "address": {
                "city": "Test city",
                "district": "Test district",
                "street": "Test street",
                "zipcode": "10000"
              },
            "phone": "080-000-0000"
        }
    """


    def test_create_api(self):
        res = create_request(self.URL, self.CREATE_BODY)
        data = json.loads(res.content.decode())

        self.assertEqual(data['created'], True)


class Supplier_Create_Fail_API_Test(MongoTestCase):
    CLEAR_CACHE = True

    URL = '/api/supplier'
    URL_SUPPLIER = '/api/supplier/nike'

    
    def test_create_no_data(self):
        CREATE_BODY = ""

        create_request(self.URL, CREATE_BODY)
        res = create_request(self.URL, CREATE_BODY)
        data = json.loads(res.content.decode())

        self.assertEqual(data['errorMsg'], ['JSON Decode error'])
        self.assertEqual(data['created'], False)


    def test_create_size_dubplicated(self):
        CREATE_BODY = """
            {
                "name": "Nike",
                "address": {
                    "city": "Test city",
                    "district": "Test district",
                    "street": "Test street",
                    "zipcode": "10000"
                  },
                "phone": "080-000-0000"
            }
        """

        create_request(self.URL, CREATE_BODY)
        res = create_request(self.URL, CREATE_BODY)
        data = json.loads(res.content.decode())
        self.assertEqual(data['errorMsg'], ['Supplier already exist'])
        self.assertEqual(data['created'], False)

