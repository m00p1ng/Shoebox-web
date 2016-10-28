from django.test import Client
from test_addons import MongoTestCase
from ecom.suppliers.api import *
from ecom.suppliers.api.company import *
from ecom.suppliers.models import suppliers
from ecom.suppliers.models import company

class Supplier_API_Test(MongoTestCase):
    CLEAR_CACHE = True

    URL = '/api/supplier/'
    URL_SUPPLIER = '/api/supplier/name/firstname-lastname'
    URL_COMPANY = '/api/supplier/company'
    CREATE_BODY_SUPPLIER = """
        {
        	"company": "nike",
        	"contactFirstname": "Firstname",
            "contactLastname": "Lastname",
            "contactTitle": "Test",
            "phone": "080-000-0000",
            "email": "test@test.com"
        }
    """
    CREATE_BODY_COMPANY = """
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
        c.post(self.URL_COMPANY, data=self.CREATE_BODY_COMPANY, content_type="application/json")

        c = Client()
        res = c.post(self.URL, data=self.CREATE_BODY_SUPPLIER, content_type="application/json")
        self.assertEqual(res.content.decode(), 'Supplier created')


    def test_update_api(self):
        c = Client()
        c.post(self.URL_COMPANY, data=self.CREATE_BODY_COMPANY, content_type="application/json")

        c = Client()
        c.post(self.URL, data=self.CREATE_BODY_SUPPLIER, content_type="application/json")

        UPDATE_BODY = """
            {
              "contactFirstname": "Changefirstname",
              "contactLastname": "Changelastname",
              "contactTitle": "Manager"
            }
        """
        c = Client()
        res = c.put(self.URL_SUPPLIER, data=UPDATE_BODY, content_type="application/json")
        self.assertEqual(res.content.decode(), 'Supplier updated')


    def test_delete_api(self):
        c = Client()
        c.post(self.URL_COMPANY, data=self.CREATE_BODY_COMPANY, content_type="application/json")

        c = Client()
        c.post(self.URL, data=self.CREATE_BODY_SUPPLIER, content_type="application/json")

        c = Client()
        res = c.delete(self.URL_SUPPLIER)
        self.assertEqual(res.content.decode(), 'Supplier removed')
