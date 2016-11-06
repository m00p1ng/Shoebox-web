from django.test import Client
from test_addons import MongoTestCase
from api.include.api import create_request
import json

json_type = "application/json"

class productBrand_Update_API_Test(MongoTestCase):
    CLEAR_CACHE = True

    URL = '/api/product/brand'
    URL_BRAND = '/api/product/brand/nike'
    CREATE_BODY = """{ "name": "nike" }"""


    def test_update_api(self):
        create_request(self.URL, self.CREATE_BODY)

        UPDATE_BODY = """{"name": "nike2"}"""

        c = Client()
        res = c.put(self.URL_BRAND, data=UPDATE_BODY, content_type=json_type)
        data = json.loads(res.content.decode())

        self.assertEqual(data['updated'], True)
