from django.test import Client
from test_addons import MongoTestCase
from api.include.test import create_request
import json
from api.suppliers.company import *
from api.suppliers.models import company

class Company_Create_API_Test(MongoTestCase):
    CLEAR_CACHE = True

    URL = '/api/supplier/company'
    URL_COMPANY = '/api/supplier/company/nike'
    CREATE_BODY = """
        {
            "name": "Nike",
            "address": {
                "city": "Test city",
                "district": "Test district",
                "street": "Test street",
                "zipcode": "10000"
              }
        }
    """

    def test_create_api(self):
        c = Client()
        res = c.post(self.URL, data=self.CREATE_BODY, content_type="application/json")
        self.assertEqual(res.content.decode(), 'Company created')


   

class Company_Create_Fail_API_Test(MongoTestCase):
    CLEAR_CACHE = True

    URL = '/api/supplier/company'
    URL_COMPANY = '/api/supplier/company/nike'

    
    def test_create_no_data(self):
        CREATE_BODY = ""

        create_request(self.URL, CREATE_BODY)
        res = create_request(self.URL, CREATE_BODY)
        data = json.loads(res.content.decode())

        self.assertEqual(data['errorMsg'], ['JSON Decode error'])
        self.assertEqual(data['created'], False)

    def test_create_size_dubplicated(self):
        CREATE_BODY = """{"name": "nike",
            "address": {
                "city": "Test city",
                "district": "Test district",
                "street": "Test street",
                "zipcode": "10000"
              }
        }"""

        create_request(self.URL, CREATE_BODY)
        res = create_request(self.URL, CREATE_BODY)
        data = json.loads(res.content.decode())
        self.assertEqual(data['errorMsg'], ['Company already exist'])
        self.assertEqual(data['created'], False)

   