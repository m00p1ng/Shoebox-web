from test_addons import MongoTestCase
from api.include.test import create_request
import json

def create_test_database():
    URL_CUSTOMER = '/api/user/customer'

    CREATE_BODY_CUSTOMER = {
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

    create_request(URL_CUSTOMER, json.dumps(CREATE_BODY_CUSTOMER))
