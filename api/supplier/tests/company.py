from django.test import Client
from test_addons import MongoTestCase
from api.supplier.company import *
from api.supplier.models import company

class Supplier_API_Test(MongoTestCase):
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


    def test_update_api(self):
        c = Client()
        c.post(self.URL, data=self.CREATE_BODY, content_type="application/json")

        UPDATE_BODY = """
            {
              "name": "Adidas",
              "address":{
                "city": "Bangkok"
              }
            }
        """
        c = Client()
        res = c.put(self.URL_COMPANY, data=UPDATE_BODY, content_type="application/json")
        self.assertEqual(res.content.decode(), 'Company updated')


    def test_delete_api(self):
        c = Client()
        c.post(self.URL, data=self.CREATE_BODY, content_type="application/json")

        c = Client()
        res = c.delete(self.URL_COMPANY)
        self.assertEqual(res.content.decode(), 'Company removed')
