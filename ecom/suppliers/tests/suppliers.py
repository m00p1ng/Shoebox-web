from django.test import Client
from test_addons import MongoTestCase
from ecom.suppliers.api import *
from ecom.suppliers.models import Suppliers

class Supplier_API_Test(MongoTestCase):
    CLEAR_CACHE = True

    CREATE_URL = '/api/supplier/create'
    CREATE_BODY = """
        {
        	"companyName": "Nike",
        	"contactFirstname": "Firstname",
            "contactLastname": "Lastname",
            "contactTitle": "Test",
            "address": {
                "city": "Test city",
                "district": "Test district",
                "street": "Test street",
                "zipcode": "10000"
              },
            "phone": "080-000-0000",
            "email": "test@test.com"
        }
    """

    def test_create_api(self):
        c = Client()
        res = c.post(self.CREATE_URL, data=self.CREATE_BODY, content_type="application/json")
        self.assertEqual(res.content.decode(), 'Supplier created')


    def test_create_with_other_method(self):
        c = Client()
        res = c.get(self.CREATE_URL)
        self.assertEqual(res.content.decode(), 'Method not allowed')

        c = Client()
        res = c.put(self.CREATE_URL, data=self.CREATE_BODY, content_type="application/json")
        self.assertEqual(res.content.decode(), 'Method not allowed')

        c = Client()
        res = c.delete(self.CREATE_URL, data=self.CREATE_BODY, content_type="application/json")
        self.assertEqual(res.content.decode(), 'Method not allowed')


    def test_update_api(self):
        c = Client()
        c.post(self.CREATE_URL, data=self.CREATE_BODY, content_type="application/json")

        UPDATE_URL = '/api/supplier/update/nike'
        UPDATE_BODY = """
            {
              "companyName": "Adidas",
              "contactTitle": "Manager",
              "address":{
                "city": "Bangkok"
              }
            }
        """
        c = Client()
        res = c.put(UPDATE_URL, data=UPDATE_BODY, content_type="application/json")
        self.assertEqual(res.content.decode(), 'Supplier updated')


    def test_update_with_other_method(self):
        c = Client()
        c.post(self.CREATE_URL, data=self.CREATE_BODY, content_type="application/json")

        UPDATE_URL = '/api/supplier/update/nike'
        UPDATE_BODY = """
            {
              "companyName": "Adidas",
              "contactTitle": "Manager",
              "address":{
                "city": "Bangkok"
              }
            }
        """

        c = Client()
        res = c.get(UPDATE_URL)
        self.assertEqual(res.content.decode(), 'Method not allowed')

        c = Client()
        res = c.post(UPDATE_URL, data=UPDATE_BODY, content_type="application/json")
        self.assertEqual(res.content.decode(), 'Method not allowed')

        c = Client()
        res = c.delete(UPDATE_URL, data=UPDATE_BODY, content_type="application/json")
        self.assertEqual(res.content.decode(), 'Method not allowed')


    def test_delete_api(self):
        c = Client()
        c.post(self.CREATE_URL, data=self.CREATE_BODY, content_type="application/json")

        DELETE_URL = '/api/supplier/delete/nike'

        c = Client()
        res = c.delete(DELETE_URL)
        self.assertEqual(res.content.decode(), 'Supplier removed')


    def test_delete_with_other_method(self):
        c = Client()
        c.post(self.CREATE_URL, data=self.CREATE_BODY, content_type="application/json")

        DELETE_URL = '/api/supplier/delete/nike'

        c = Client()
        res = c.get(DELETE_URL)
        self.assertEqual(res.content.decode(), 'Method not allowed')

        c = Client()
        res = c.post(DELETE_URL)
        self.assertEqual(res.content.decode(), 'Method not allowed')

        c = Client()
        res = c.put(DELETE_URL)
        self.assertEqual(res.content.decode(), 'Method not allowed')
