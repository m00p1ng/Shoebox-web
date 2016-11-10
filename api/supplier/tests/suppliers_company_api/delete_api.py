from django.test import Client
from test_addons import MongoTestCase
from api.include.test import create_request
import json
from api.supplier.company import *
from api.supplier.models import company

class supplierCompany_Delete_API_Test(MongoTestCase):
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

    def test_delete_api(self):

        c = Client()
        res = c.post(self.URL, data=self.CREATE_BODY, content_type="application/json")
        c = Client()
        res = c.delete(self.URL_COMPANY)
        self.assertEqual(res.content.decode(), 'Company removed')

class supplierCompany_Delete_Fail_API_Test(MongoTestCase):
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


    def test_delete_company_not_exist(self):
        c = Client()
        res = c.post(self.URL, data=self.CREATE_BODY, content_type="application/json")
        URL_COMPANY = '/api/supplier/company/nike2'
        c = Client()
        res = c.delete(URL_COMPANY)
        self.assertEqual(res.content.decode(), 'This company not exist')