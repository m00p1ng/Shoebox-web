from django.test import Client
from test_addons import MongoTestCase
from api.product.models import productColor

class productColor_API_Test(MongoTestCase):
    CLEAR_CACHE = True

    URL = '/api/product/color'
    URL_COLOR = '/api/product/color/white'
    CREATE_BODY = """{ "name": "white" }"""

    def test_create_api(self):
        c = Client()
        res = c.post(self.URL, data=self.CREATE_BODY, content_type="application/json")
        self.assertEqual(res.content.decode(), 'productColor created')


    def test_update_api(self):
        c = Client()
        c.post(self.URL, data=self.CREATE_BODY, content_type="application/json")

        UPDATE_BODY = """{ "name": "black" }"""

        c = Client()
        res = c.put(self.URL_COLOR, data=UPDATE_BODY, content_type="application/json")
        self.assertEqual(res.content.decode(), 'productColor updated')


    def test_delete_api(self):
        c = Client()
        c.post(self.URL, data=self.CREATE_BODY, content_type="application/json")

        c = Client()
        res = c.delete(self.URL_COLOR)
        self.assertEqual(res.content.decode(), 'productColor removed')
