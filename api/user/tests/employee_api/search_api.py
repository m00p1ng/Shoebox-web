from django.test import Client
from test_addons import MongoTestCase
from api.include.test import create_request
from .create_body import *
import json

class Employee_Search_API_Test(MongoTestCase):
    CLEAR_CACHE = True

    def test_search_api(self):
        create_request(URL_EMPLOYEE, CREATE_BODY)
        c = Client()
        res = c.get(URL_EMPLOYEE_USERNAME)
        data = json.loads(res.content.decode())

        self.assertEqual(data['username'], 'mooping12345')
        self.assertEqual(data['phone'], "080-000-0000")


class Employee_Search_Fail_API_Test(MongoTestCase):
    CLEAR_CACHE = True

    def test_search_no_Employee(self):
        c = Client()
        res = c.get(URL_EMPLOYEE_USERNAME)

        self.assertEqual(res.content.decode(), 'Not found')
