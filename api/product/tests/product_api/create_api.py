from test_addons import MongoTestCase
from .create_test_database import *
from api.include.test import create_request
import json

class Product_Create_API_Test(MongoTestCase):
    CLEAR_CACHE = True

    URL = '/api/product'
    CREATE_BODY = """
        {
            "name": "shoe",
            "supplier": "nike",
            "brand": "nike",
            "types": "running",
            "description": "product description",
            "price": 20,
            "picture": "picture URL",
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
        res = create_request(self.URL, self.CREATE_BODY)
        data = json.loads(res.content.decode())

        self.assertEqual(data['created'], True)


class Product_Create_Fail_API_Test(MongoTestCase):
    CLEAR_CACHE = True

    URL = '/api/product'

    def test_create_no_name(self):
        create_test_database()
        CREATE_BODY = """
            {
                "supplier": "nike",
                "brand": "nike",
                "description": "product description",
                "picture": "picture URL",
                "amount": 20,
                "size": ["48"],
                "color": ["red"],
                "is_available": true,
                "is_discount": false,
                "discountPercent": 20
            }
        """
 
        res = create_request(self.URL, CREATE_BODY)
        data = json.loads(res.content.decode())

        self.assertEqual(data['errorMsg'], ['Name cannot empty','Types cannot empty','Price cannot empty'])
        self.assertEqual(data['created'], False)


    def test_create_no_data(self):
        create_test_database()
        CREATE_BODY = ""
        res = create_request(self.URL, CREATE_BODY)
        data = json.loads(res.content.decode())

        self.assertEqual(data['errorMsg'], ['JSON Decode error'])
        self.assertEqual(data['created'], False)


    def test_create_product_dubplicated(self):
        create_test_database()
        CREATE_BODY = """
            {
                "name": "shoe",
                "supplier": "nike",
                "brand": "nike",
                "types": "running",
                "description": "product description",
                "price": 20,
                "picture": "picture URL",
                "amount": 20,
                "size": ["48"],
                "color": ["red"],
                "is_available": true,
                "is_discount": false,
                "discountPercent": 20
            }
        """
        create_request(self.URL, CREATE_BODY)
        res = create_request(self.URL, CREATE_BODY)
        data = json.loads(res.content.decode())

        self.assertEqual(data['errorMsg'], ['Brand already exist'])
        self.assertEqual(data['created'], False)
