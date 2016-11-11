from django.test import Client
from test_addons import MongoTestCase

class product_API_Test(MongoTestCase):
    CLEAR_CACHE = True

    URL = '/api/product/'
    URL_PRODUCT = '/api/product/name/shoe'
    CREATE_BODY = """
    {
        "name": "shoe",
        "supplier": "firstname-lastname",
        "brand": "nike",
        "types": "running",
        "description": "product description",
        "price": 20,
        "picture": "picture URL",
        "amount": 20,
        "size": ["48"],
        "color": ["red"],
        "is_available": true,
        "is_discount": false,
        "discountPercent": 20
    }
    """

    def test_create_api(self):
        create_test_database()
        c = Client()
        res = c.post(self.URL, data=self.CREATE_BODY, content_type="application/json")
        self.assertEqual(res.content.decode(), 'Product created')


    def test_update_api(self):
        create_test_database()
        c = Client()
        c.post(self.URL, data=self.CREATE_BODY, content_type="application/json")

        UPDATE_BODY = """
            {
              "name": "nike2",
              "price": 40
            }
        """
        c = Client()
        res = c.put(self.URL_PRODUCT, data=UPDATE_BODY, content_type="application/json")
        self.assertEqual(res.content.decode(), 'Product updated')

    def test_delete_api(self):
        create_test_database()
        c = Client()
        c.post(self.URL, data=self.CREATE_BODY, content_type="application/json")

        c = Client()
        res = c.delete(self.URL_PRODUCT)
        self.assertEqual(res.content.decode(), 'Product removed')

def create_test_database():
    URL_BRAND = '/api/product/brand'
    URL_COLOR = '/api/product/color'
    URL_SIZE = '/api/product/size'
    URL_TYPE = '/api/product/type'
    CREATE_BODY_BRAND = """{ "name": "nike" }"""
    CREATE_BODY_COLOR = """{ "name": "red" }"""
    CREATE_BODY_TYPE = """ { "name": "running" }"""
    CREATE_BODY_SIZE = """{ "name":  "48" }"""

    URL_SUPPLIER = '/api/supplier'
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

    c = Client()
    c.post(URL_BRAND, data=CREATE_BODY_BRAND, content_type="application")
    c = Client()
    c.post(URL_COLOR, data=CREATE_BODY_COLOR, content_type="application")
    c = Client()
    c.post(URL_TYPE, data=CREATE_BODY_TYPE, content_type="application")
    c = Client()
    c.post(URL_SIZE, data=CREATE_BODY_SIZE, content_type="application")
    c = Client()
    c.post(URL_COMPANY, data=CREATE_BODY_COMPANY, content_type="application")
    c = Client()
    c.post(URL_SUPPLIER, data=CREATE_BODY_SUPPLIER, content_type="application")
