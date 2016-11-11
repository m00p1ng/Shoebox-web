from django.test import Client
from test_addons import MongoTestCase
from api.include.test import create_request
import json

class supplierCompany_Search_API_Test(MongoTestCase):
    CLEAR_CACHE = True

    URL = '/api/supplier/company'
    URL_COMPANY = '/api/supplier/company/nike'
    CREATE_BODY = """
        {
            "name": "Nike",
            "address": {
                "city": "Test city",
                "district": "Test district",
                "street": "Test street",
                "zipcode": "10000"
              },
            "phone" : "0866625526"
        }
    """


    def test_search_api(self):
        create_request(self.URL, self.CREATE_BODY)

        c = Client()
        res = c.get(self.URL_COMPANY)
        data = json.loads(res.content.decode())

        self.assertEqual(data['name'], 'Nike')


class supplierCompany_Search_Fail_API_Test(MongoTestCase):
    CLEAR_CACHE = True

    URL = '/api/supplier/company'
    URL_SEARCH = '/api/supplier/company/Bata'
    CREATE_BODY = """{  
            "name": "Bata",
            "address": {
                "city": "Test city",
                "district": "Test district",
                "street": "Test street",
                "zipcode": "10000"
              },
            "phone" : "0866625526"}"""
    
    def test_create_no_name(self):
        c = Client()
        res = c.get(self.URL_SEARCH)

        self.assertEqual(res.content.decode(), 'Not found')

