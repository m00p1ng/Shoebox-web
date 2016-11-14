from .create_user import *
from django.test import Client
from test_addons import MongoTestCase
from api.include.test import create_request
import json

class User_Login_API_Test(MongoTestCase):
    CLEAR_CACHE = True

    URL_CREATE = '/api/user/customer'
    URL_LOGIN = '/api/login'

    CREATE_BODY_LOGIN = {
        'username': 'mooping12345',
        'password': 'secret'
    }


    def test_login_api(self):
        create_request(self.URL_CREATE, json.dumps(create_user(1)))

        res = create_request(self.URL_LOGIN, json.dumps(self.CREATE_BODY_LOGIN))
        data = json.loads(res.content.decode())

        self.assertEqual(data['username'], 'mooping12345')
        self.assertEqual(data['role'], 'customer')


class User_Login_Fail_API_Test(MongoTestCase):
    CLEAR_CACHE = True

    URL_CREATE = '/api/user/customer'
    URL_LOGIN = '/api/login'

    def test_login_no_username_and_password(self):
        CREATE_BODY_LOGIN = {
            'username': '',
            'password': ''
        }

        create_request(self.URL_CREATE, json.dumps(create_user(1)))

        res = create_request(self.URL_LOGIN, json.dumps(CREATE_BODY_LOGIN))
        data = json.loads(res.content.decode())

        self.assertEqual(data['errorMsg'], 'Username and password cannot empty')


    def test_login_username_or_password_incorret(self):
        CREATE_BODY_LOGIN = {
            'username': 'mping12345',
            'password': 'secreeet'
        }

        create_request(self.URL_CREATE, json.dumps(create_user(1)))

        res = create_request(self.URL_LOGIN, json.dumps(CREATE_BODY_LOGIN))
        data = json.loads(res.content.decode())

        self.assertEqual(data['errorMsg'], 'Username or password incorrect')


    def test_login_value_error(self):
        CREATE_BODY_LOGIN = "" 

        create_request(self.URL_CREATE, json.dumps(create_user(1)))

        res = create_request(self.URL_LOGIN, CREATE_BODY_LOGIN)
        data = json.loads(res.content.decode())

        self.assertEqual(data['errorMsg'], 'JSON Decode error')

