from django.test import Client
from test_addons import MongoTestCase
from api.product.models import productBrand

class productBrand_API_Test(MongoTestCase):
    CLEAR_CACHE = True

    URL = '/api/product/brand'
    URL_BRAND = '/api/product/brand/nike'
    CREATE_BODY = """{ "name": "nike" }"""

    def test_create_api(self):
        c = Client()
        res = c.post(self.URL, data=self.CREATE_BODY, content_type="application/json")
        self.assertEqual(res.content.decode(), 'ProductBrand created')


    def test_update_api(self):
        c = Client()
        c.post(self.URL, data=self.CREATE_BODY, content_type="application/json")

        UPDATE_BODY = """
            {
              "name": "nike2"
            }
        """
        c = Client()
        res = c.put(self.URL_BRAND, data=UPDATE_BODY, content_type="application/json")
        self.assertEqual(res.content.decode(), 'ProductBrand updated')


    def test_delete_api(self):
        c = Client()
        c.post(self.URL, data=self.CREATE_BODY, content_type="application/json")

        c = Client()
        res = c.delete(self.URL_BRAND)
        self.assertEqual(res.content.decode(), 'ProductBrand removed')
