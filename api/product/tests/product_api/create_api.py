from test_addons import MongoTestCase
from .create_test_database import *
from api.include.test import create_request
import json

class Product_Create_API_Test(MongoTestCase):
    CLEAR_CACHE = True

    def test_create_api(self):
        create_test_database()
        res = create_request(URL_PRODUCT, CREATE_BODY)
        data = json.loads(res.content.decode())

        self.assertEqual(data['created'], True)


class Product_Create_Fail_API_Test(MongoTestCase):
    CLEAR_CACHE = True

    def test_create_no_name(self):
        create_test_database()
        CREATE_BODY = json.dumps({
            "supplier": "nike",
            "brand": "nike",
            "description": "product description",
            "picture": "picture URL",
            "amount": 20,
            "size": ["48"],
            "color": ["red"],
            "is_available": True,
            "is_discount": False,
            "discountPercent": 20
        })

        res = create_request(URL_PRODUCT, CREATE_BODY)
        data = json.loads(res.content.decode())

        self.assertEqual(data['errorMsg'], [
                'Name cannot empty',
                'Types cannot empty',
                'Price cannot empty'
            ]
        )
        self.assertEqual(data['created'], False)


    def test_create_no_data(self):
        create_test_database()
        CREATE_BODY = ""
        res = create_request(URL_PRODUCT, CREATE_BODY)
        data = json.loads(res.content.decode())

        self.assertEqual(data['errorMsg'], ['JSON Decode error'])
        self.assertEqual(data['created'], False)


    def test_create_product_dubplicated(self):
        create_test_database()
        create_request(URL_PRODUCT, CREATE_BODY)
        res = create_request(URL_PRODUCT, CREATE_BODY)
        data = json.loads(res.content.decode())

        self.assertEqual(data['errorMsg'], ['Brand already exist'])
        self.assertEqual(data['created'], False)
