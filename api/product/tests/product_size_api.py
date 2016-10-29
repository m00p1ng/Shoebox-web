from django.test import Client
from test_addons import MongoTestCase
from api.product.models import productSize

class productSize_API_Test(MongoTestCase):
    CLEAR_CACHE = True

    URL = '/api/product/size'
    URL_SIZE = '/api/product/size/48'
    CREATE_BODY = """{ "name":  "48" }"""

    def test_create_api(self):
        c = Client()
        res = c.post(self.URL, data=self.CREATE_BODY, content_type="application/json")
        self.assertEqual(res.content.decode(), 'productSize created')


    def test_update_api(self):
        c = Client()
        c.post(self.URL, data=self.CREATE_BODY, content_type="application/json")

        UPDATE_BODY = """{ "name" : "6" }"""

        c = Client()
        res = c.put(self.URL_SIZE, data=UPDATE_BODY, content_type="application/json")
        self.assertEqual(res.content.decode(), 'productSize updated')


    def test_delete_api(self):
        c = Client()
        c.post(self.URL, data=self.CREATE_BODY, content_type="application/json")

        c = Client()
        res = c.delete(self.URL_SIZE)
        self.assertEqual(res.content.decode(), 'productSize removed')
