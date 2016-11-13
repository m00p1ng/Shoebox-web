from django.test import Client
from test_addons import MongoTestCase
from api.include.test import create_request
import json

class customer_Delete_API_Test(MongoTestCase):
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

    def test_delete_api(self):
        create_request(self.URL, json.dumps(self.CREATE_BODY))

        c = Client()
        res = c.delete(self.URL_CUSTOMER)
        data = json.loads(res.content.decode())

        self.assertEqual(data['deleted'], True)


class customer_Delete_Fail_API_Test(MongoTestCase):
    CLEAR_CACHE = True

    URL = '/api/user/customer'
    URL_CUSTOMER = '/api/user/customer/mooping12345'

    def test_delete_customer_not_exist(self):

        c = Client()
        res = c.delete(self.URL_CUSTOMER)
        data = json.loads(res.content.decode())

        self.assertEqual(data['deleted'], False)
