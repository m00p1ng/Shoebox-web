from test_addons import MongoTestCase
from api.include.test import create_request
import json

def create_test_database():
    URL_CUSTOMER = '/api/user/customer'
    URL_BRAND = '/api/product/brand'
    URL_COLOR = '/api/product/color'
    URL_SIZE = '/api/product/size'
    URL_TYPE = '/api/product/type'
    URL_SUPPLIER = '/api/supplier'
    URL_PRODUCT = '/api/product'
    URL_PROMOTION = '/api/promotion'
    URL_ORDER = '/api/order'

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



    CREATE_BODY_BRAND = { 'name': 'nike' }
    CREATE_BODY_COLOR = { 'name': 'red' }
    CREATE_BODY_TYPE =  { 'name': 'running' }
    CREATE_BODY_SIZE = { 'name':  '48' }

    CREATE_BODY_SUPPLIER = {
        'name': 'Nike',
        'address': {
            'city': 'Test city',
            'district': 'Test district',
            'street': 'Test street',
            'zipcode': '10000'
          },
        'phone': '080-000-0000'
    }

    CREATE_BODY_PRODUCT = {
        "name": "shoe",
        "supplier": "nike",
        "brand": "nike",
        "types": "running",
        "description": "product description",
        "price": 20,
        "picture": "picture URL",
        "amount": 20,
        "size": ["48"],
        "color": ["red"],
        "is_available": True,
        "is_discount": False,
        "discountPercent": 20
    }

    CREATE_BODY_PROMOTION = {
        'name': 'cutcutcut',
        'cutpercent': 50,
        'dateStart': {
            'year': 2000,
            'month': 10,
            'day': 10
        },
        'dateEnd': {
            'year': 2001,
            'month': 10,
            'day': 10
        }
    }

    CREATE_BODY_ORDER = {
        'customer': 'mooping12345',
        'orderID': '0123456789',
        'date': {
            'year': 2000,
            'month': 10,
            'day': 10
        },
        'status': False,
        'orderNumber': ['0001']
    }



    create_request(URL_PROMOTION, json.dumps(CREATE_BODY_PROMOTION))
    create_request(URL_CUSTOMER, json.dumps(CREATE_BODY_CUSTOMER))
    create_request(URL_SUPPLIER, json.dumps(CREATE_BODY_SUPPLIER))
    create_request(URL_BRAND, json.dumps(CREATE_BODY_BRAND))
    create_request(URL_COLOR, json.dumps(CREATE_BODY_COLOR))
    create_request(URL_SIZE, json.dumps(CREATE_BODY_SIZE))
    create_request(URL_TYPE, json.dumps(CREATE_BODY_TYPE))
    create_request(URL_PRODUCT, json.dumps(CREATE_BODY_PRODUCT))
    create_request(URL_ORDER, json.dumps(CREATE_BODY_ORDER))
