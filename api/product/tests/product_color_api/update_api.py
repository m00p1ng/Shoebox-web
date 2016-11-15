from .create_data import *
from test_addons import MongoTestCase
from api.include.test import create_request, update_request
import json

class productColor_Update_API_Test(MongoTestCase):
    CLEAR_CACHE = True

    def test_update_api(self):
        create_request(URL_COLOR, json.dumps(CREATE_BODY))

        UPDATE_BODY = {"name": "red"}
        res = update_request(URL_COLOR_NAME, json.dumps(UPDATE_BODY))
        data = json.loads(res.content.decode())

        self.assertEqual(data['updated'], True)


class productColor_Update_Fail_API_Test(MongoTestCase):
    CLEAR_CACHE = True

    def test_update_no_item(self):
        UPDATE_BODY = {"name": "red"}

        res = update_request(URL_COLOR_NAME, json.dumps(UPDATE_BODY))
        data = json.loads(res.content.decode())

        self.assertEqual(data['errorMsg'], ['This productColor not exist'])
        self.assertEqual(data['updated'], False)


    def test_update_no_data(self):
        UPDATE_BODY = {}

        create_request(URL_COLOR, json.dumps(CREATE_BODY))
        res = update_request(URL_COLOR_NAME, json.dumps(UPDATE_BODY))
        data = json.loads(res.content.decode())

        self.assertEqual(data['errorMsg'], ['Data cannot empty'])
        self.assertEqual(data['updated'], False)


    def test_update_JSON_error(self):
        UPDATE_BODY = ""

        create_request(URL_COLOR, json.dumps(CREATE_BODY))
        res = update_request(URL_COLOR_NAME, UPDATE_BODY)
        data = json.loads(res.content.decode())

        self.assertEqual(data['errorMsg'], ['JSON Decode error'])
        self.assertEqual(data['updated'], False)
