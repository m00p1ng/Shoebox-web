from test_addons import MongoTestCase
from api.include.test import create_request, update_request
from .create_test_database import *
import json

class Product_Update_API_Test(MongoTestCase):
    CLEAR_CACHE = True

    def test_update_api(self):
        create_test_database()
        create_request(URL_PRODUCT, json.dumps(CREATE_BODY))

        UPDATE_BODY = {"name": "nike2"}

        res = update_request(URL_PRODUCT_NAME, json.dumps(UPDATE_BODY))
        data = json.loads(res.content.decode())

        self.assertEqual(data['updated'], True)


class Product_Update_Fail_API_Test(MongoTestCase):
    CLEAR_CACHE = True

    def test_update_no_item(self):
        create_test_database()
        UPDATE_BODY = {"name": "nike2"}

        res = update_request(URL_PRODUCT_NAME, json.dumps(UPDATE_BODY))
        data = json.loads(res.content.decode())

        self.assertEqual(data['errorMsg'], ['This product not exist'])
        self.assertEqual(data['updated'], False)


    def test_update_no_data(self):
        create_test_database()
        UPDATE_BODY = {}

        create_request(URL_PRODUCT, json.dumps(CREATE_BODY))
        res = update_request(URL_PRODUCT_NAME, json.dumps(UPDATE_BODY))
        data = json.loads(res.content.decode())

        self.assertEqual(data['errorMsg'], ['Data cannot empty'])
        self.assertEqual(data['updated'], False)


    def test_update_JSON_error(self):
        create_test_database()
        UPDATE_BODY = ""

        create_request(URL_PRODUCT, json.dumps(CREATE_BODY))
        res = update_request(URL_PRODUCT_NAME, UPDATE_BODY)
        data = json.loads(res.content.decode())

        self.assertEqual(data['errorMsg'], ['JSON Decode error'])
        self.assertEqual(data['updated'], False)
