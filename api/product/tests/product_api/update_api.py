from test_addons import MongoTestCase
from api.include.test import create_request, update_request
from .create_test_database import *
import json

class Product_Update_API_Test(MongoTestCase):
    CLEAR_CACHE = True

    URL = '/api/product'
    URL_PRODUCT = '/api/product/name/shoe'
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


    def test_update_api(self):
        create_test_database()
        create_request(self.URL, self.CREATE_BODY)

        UPDATE_BODY = """{"name": "nike2"}"""

        res = update_request(self.URL_PRODUCT, UPDATE_BODY)
        data = json.loads(res.content.decode())

        self.assertEqual(data['updated'], True)


class Product_Update_Fail_API_Test(MongoTestCase):
    CLEAR_CACHE = True

    URL = '/api/product'
    URL_PRODUCT = '/api/product/name/shoe'
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

    def test_update_no_item(self):
        create_test_database()
        UPDATE_BODY = """{"name": "nike2"}"""

        res = update_request(self.URL_PRODUCT, UPDATE_BODY)
        data = json.loads(res.content.decode())

        self.assertEqual(data['errorMsg'], ['This product not exist'])
        self.assertEqual(data['updated'], False)


    def test_update_no_data(self):
        create_test_database()
        UPDATE_BODY = "{}"

        create_request(self.URL, self.CREATE_BODY)
        res = update_request(self.URL_PRODUCT, UPDATE_BODY)
        data = json.loads(res.content.decode())

        self.assertEqual(data['errorMsg'], ['Data cannot empty'])
        self.assertEqual(data['updated'], False)


    def test_update_JSON_error(self):
        create_test_database()
        UPDATE_BODY = ""

        create_request(self.URL, self.CREATE_BODY)
        res = update_request(self.URL_PRODUCT, UPDATE_BODY)
        data = json.loads(res.content.decode())

        self.assertEqual(data['errorMsg'], ['JSON Decode error'])
        self.assertEqual(data['updated'], False)
