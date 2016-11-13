from test_addons import MongoTestCase
from api.include.test import create_request, update_request
import json

class customer_Updated_API_Test(MongoTestCase):
    CLEAR_CACHE = True

    URL = '/api/user/customer'
    URL_CUSTOMER = '/api/user/customer/mooping12345'
    CREATE_BODY = {
        'username': 'mooping12345',
        'password': 'secret',
        'repassword': 'secret',
        'email': 'mail@gmail.com',
        'firstname': 'kaoneaw',
        'lastname': 'mooping',
        'picture' : 'picture url',
        'gender': 'male',
        'birthday': {
            'year': 2000,
            'month': 10,
            'day': 10
        },
        'address': {
            'city': 'my-city',
            'district': 'my-district',
            'street': 'my-street',
            'zipcode': '99999'
        },
        'phone': '080-000-0000',
        'credit' : {
            'type' : 'XXX',
            'id' : '6625526',
            'exp' : '06/12'
        },
        'ship': {
            'city': 'my-city',
            'district': 'my-district',
            'street': 'my-street',
            'zipcode': '99999'
        }
    }

    def test_update_api(self):
        create_request(self.URL, json.dumps(self.CREATE_BODY))        

        UPDATE_BODY = {'phone' : '087-777-7777'}

        res = update_request(self.URL_CUSTOMER, json.dumps(UPDATE_BODY))
        data = json.loads(res.content.decode())

        self.assertEqual(data['updated'], True)

class customer_Update_Fail_API_Test(MongoTestCase):
    CLEAR_CACHE = True

    URL = '/api/user/customer'
    URL_CUSTOMER = '/api/user/customer/mooping12345'
    CREATE_BODY = {
        'username': 'mooping12345',
        'password': 'secret',
        'repassword': 'secret',
        'email': 'mail@gmail.com',
        'firstname': 'kaoneaw',
        'lastname': 'mooping',
        'picture' : 'picture url',
        'gender': 'male',
        'birthday': {
            'year': 2000,
            'month': 10,
            'day': 10
        },
        'address': {
            'city': 'my-city',
            'district': 'my-district',
            'street': 'my-street',
            'zipcode': '99999'
        },
        'phone': '080-000-0000',
        'credit' : {
            'type' : 'XXX',
            'id' : '6625526',
            'exp' : '06/12'
        },
        'ship': {
            'city': 'my-city',
            'district': 'my-district',
            'street': 'my-street',
            'zipcode': '99999'
        }
    }


    def test_update_no_item(self):

        UPDATE_BODY = {'phone' : '087-777-7777'}
        res = update_request(self.URL_CUSTOMER, json.dumps(UPDATE_BODY))
        data = json.loads(res.content.decode())

        self.assertEqual(data['errorMsg'], ['This customer not exist'])
        self.assertEqual(data['updated'], False)


    def test_update_no_data(self):
        UPDATE_BODY = {}

        create_request(self.URL, json.dumps(self.CREATE_BODY))
        res = update_request(self.URL_CUSTOMER, json.dumps(UPDATE_BODY))
        data = json.loads(res.content.decode())

        self.assertEqual(data['errorMsg'], ['Data cannot empty'])
        self.assertEqual(data['updated'], False)


    def test_update_JSON_error(self):
        UPDATE_BODY = ""

        create_request(self.URL, json.dumps(self.CREATE_BODY))
        res = update_request(self.URL_CUSTOMER, UPDATE_BODY)
        data = json.loads(res.content.decode())

        self.assertEqual(data['errorMsg'], ['JSON Decode error'])
        self.assertEqual(data['updated'], False)
