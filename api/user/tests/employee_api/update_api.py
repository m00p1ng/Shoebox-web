from test_addons import MongoTestCase
from api.include.test import create_request, update_request
from .create_body import *
import json

class employee_Updated_API_Test(MongoTestCase):
    CLEAR_CACHE = True

    def test_update_api(self):
        create_request(URL_EMPLOYEE, json.dumps(CREATE_BODY))

        UPDATE_BODY = {'phone' : '087-777-7777'}

        res = update_request(URL_EMPLOYEE_USERNAME, json.dumps(UPDATE_BODY))
        data = json.loads(res.content.decode())
        self.assertEqual(data['updated'], True)


class employee_Update_Fail_API_Test(MongoTestCase):
    CLEAR_CACHE = True

    def test_update_no_item(self):

        UPDATE_BODY = {'phone' : '087-777-7777'}
        res = update_request(URL_EMPLOYEE_USERNAME, json.dumps(UPDATE_BODY))
        data = json.loads(res.content.decode())

        self.assertEqual(data['errorMsg'], ['This employee not exist'])
        self.assertEqual(data['updated'], False)


    def test_update_no_data(self):
        UPDATE_BODY = {}

        create_request(URL_EMPLOYEE, json.dumps(CREATE_BODY))
        res = update_request(URL_EMPLOYEE_USERNAME, json.dumps(UPDATE_BODY))
        data = json.loads(res.content.decode())

        self.assertEqual(data['errorMsg'], ['Data cannot empty'])
        self.assertEqual(data['updated'], False)


    def test_update_JSON_error(self):
        UPDATE_BODY = ""

        create_request(URL_EMPLOYEE, json.dumps(CREATE_BODY))
        res = update_request(URL_EMPLOYEE_USERNAME, UPDATE_BODY)
        data = json.loads(res.content.decode())

        self.assertEqual(data['errorMsg'], ['JSON Decode error'])
        self.assertEqual(data['updated'], False)
