from django.test import Client
from test_addons import MongoTestCase
from ecom.product.models import product
from ecom.product.models import productColor
from ecom.product.models import productBrand
from ecom.product.models import productSize
from ecom.product.models import productType

class product_API_Test(MongoTestCase):
    CLEAR_CACHE = True

    URL = '/api/product/'
    URL_PRODUCT = '/api/product/name/shoe'
    CREATE_BODY = """
    {
        "name": "shoe",
        "brand": "nike",
        "types": "running",
        "description": "product description",
        "price": 20,
        "picture": "picture URL",
        "date" : {
            "year": 2016,
            "month": 10,
            "day": 10
        },
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

    c = Client()
    c.post(URL_BRAND, data=CREATE_BODY_BRAND, content_type="application")
    c = Client()
    c.post(URL_COLOR, data=CREATE_BODY_COLOR, content_type="application")
    c = Client()
    c.post(URL_TYPE, data=CREATE_BODY_TYPE, content_type="application")
    c = Client()
    c.post(URL_SIZE, data=CREATE_BODY_SIZE, content_type="application")
