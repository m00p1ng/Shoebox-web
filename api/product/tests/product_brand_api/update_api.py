from test_addons import MongoTestCase
from api.include.test import create_request, update_request
import json

class productBrand_Update_API_Test(MongoTestCase):
    CLEAR_CACHE = True

    URL = '/api/product/brand'
    URL_BRAND = '/api/product/brand/nike'
    CREATE_BODY = """{ "name": "nike" }"""


    def test_update_api(self):
        create_request(self.URL, self.CREATE_BODY)

        UPDATE_BODY = """{"name": "nike2"}"""

        res = update_request(self.URL_BRAND, UPDATE_BODY)
        data = json.loads(res.content.decode())

        self.assertEqual(data['updated'], True)
