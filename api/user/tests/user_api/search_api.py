from .create_user import *
from django.test import Client
from test_addons import MongoTestCase
from api.include.test import create_request
import json

class User_Search_API_Test(MongoTestCase):
    CLEAR_CACHE = True

    URL_CREATE = '/api/user/customer'
    URL_USER_ALL = '/api/user'
    URL_USER_1 = '/api/user/username/mooping12345'
    URL_USER_2 = '/api/user/username/supertam'

    def test_search_by_username_api(self):
        create_request(self.URL_CREATE, json.dumps(create_user(1)))

        c = Client()
        res = c.get(self.URL_USER_1)
        data = json.loads(res.content.decode())

        self.assertEqual(data['username'], 'mooping12345')
        self.assertEqual(data['phone'], '080-000-0000')

    def test_search_all_api(self):
        create_request(self.URL_CREATE, json.dumps(create_user(1)))
        create_request(self.URL_CREATE, json.dumps(create_user(2)))

        c = Client()
        res = c.get(self.URL_USER_ALL)
        data = json.loads(res.content.decode())

        self.assertEqual(data[0]['username'], 'mooping12345')
        self.assertEqual(data[1]['username'], 'supertam')



class User_Search_Fail_API_Test(MongoTestCase):
    CLEAR_CACHE = True

    URL_SEARCH = '/api/user/username/mooping12345'
 
    def test_search_no_Customer(self):
        c = Client()
        res = c.get(self.URL_SEARCH)

        self.assertEqual(res.content.decode(), 'Not found')

