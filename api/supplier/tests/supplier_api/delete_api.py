from django.test import Client
from test_addons import MongoTestCase
from api.include.test import create_request
import json

class Supplier_Delete_API_Test(MongoTestCase):
    CLEAR_CACHE = True

    URL = '/api/supplier'
    URL_SUPPLIER = '/api/supplier/name/nike'
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



    def test_delete_api(self):
        create_request(self.URL, self.CREATE_BODY)

        c = Client()
        res = c.delete(self.URL_SUPPLIER)
        data = json.loads(res.content.decode())

        self.assertEqual(data['deleted'], True)


class Supplier_Delete_Fail_Api_Test(MongoTestCase):
    clear_cache = True

    URL = '/api/supplier'
    URL_SUPPLIER = '/api/supplier/name/nike'
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

    def test_delete_color_not_exist(self):
        URL_SUPPLIER = '/api/supplier/name/nike2'

        c = Client()
        res = c.delete(URL_SUPPLIER)
        data = json.loads(res.content.decode())

        self.assertEqual(data['deleted'], False)


