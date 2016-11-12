from django.test import Client
from test_addons import MongoTestCase
from api.include.test import create_request
import json

class Supplier_Search_API_Test(MongoTestCase):
    CLEAR_CACHE = True

    URL = '/api/supplier'
    URL_SIZE = '/api/supplier/name/nike'
    CREATE_BODY = """
        {
            "name": "Nike",
            "address": {
                "city": "Test city",
                "district": "Test district",
                "street": "Test street",
                "zipcode": "10000"
              },
            "phone": "080-000-0000"
        }
    """


    def test_search_api(self):
        create_request(self.URL, self.CREATE_BODY)

        c = Client()
        res = c.get(self.URL_SIZE)
        data = json.loads(res.content.decode())

        self.assertEqual(data['name'], 'Nike')


class Supplier_Search_Fail_API_Test(MongoTestCase):
    CLEAR_CACHE = True

    URL = '/api/supplier'
    URL_SEARCH = '/api/supplier/name/bata'
    CREATE_BODY = """
        {
            "name": "Nike",
            "address": {
                "city": "Test city",
                "district": "Test district",
                "street": "Test street",
                "zipcode": "10000"
              },
            "phone": "080-000-0000"
        }
    """


    def test_create_no_name(self):
        c = Client()
        res = c.get(self.URL_SEARCH)

        self.assertEqual(res.content.decode(), 'Not found')

