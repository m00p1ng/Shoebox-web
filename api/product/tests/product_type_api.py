from django.test import Client
from test_addons import MongoTestCase
from api.product.models import productType

class productType_API_Test(MongoTestCase):
    CLEAR_CACHE = True

    URL = '/api/product/type'
    URL_PRODUCTTYPE = '/api/product/type/running'
    CREATE_BODY = """ { "name": "running" }"""

    def test_create_api(self):
        c = Client()
        res = c.post(self.URL, data=self.CREATE_BODY, content_type="application/json")
        self.assertEqual(res.content.decode(), 'productType created')


    def test_update_api(self):
        c = Client()
        c.post(self.URL, data=self.CREATE_BODY, content_type="application/json")

        UPDATE_BODY = """{ "name": "sneaker" }"""
        c = Client()
        res = c.put(self.URL_PRODUCTTYPE, data=UPDATE_BODY, content_type="application/json")
        self.assertEqual(res.content.decode(), 'productType updated')


    def test_delete_api(self):
        c = Client()
        c.post(self.URL, data=self.CREATE_BODY, content_type="application/json")

        c = Client()
        res = c.delete(self.URL_PRODUCTTYPE)
        self.assertEqual(res.content.decode(), 'productType removed')
