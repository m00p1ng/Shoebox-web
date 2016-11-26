from test_addons import MongoTestCase
from api.include.test import create_request
import json

URL_PRODUCT = '/api/product'

URL_PRODUCT_NAME = '/api/product/name/shoe'

CREATE_BODY = json.dumps({
    "name": "shoe",
    "supplier": "nike",
    "brand": "nike",
    "types": "running",
    "description": "product description",
    "price": 20,
    "picture": "picture URL",
    "amount": 20,
    "size": ["48"],
    "color": "red",
    "is_available": True,
    "is_discount": False,
    "discountPercent": 20
})

def create_test_database():
    URL_BRAND = '/api/product/brand'
    URL_COLOR = '/api/product/color'
    URL_SIZE = '/api/product/size'
    URL_TYPE = '/api/product/type'
    CREATE_BODY_BRAND = json.dumps({ "name": "nike" })
    CREATE_BODY_COLOR = json.dumps({ "name": "red" })
    CREATE_BODY_TYPE = json.dumps({ "name": "running" })
    CREATE_BODY_SIZE = json.dumps({ "name":  "48" })

    URL_SUPPLIER = '/api/supplier'
    CREATE_BODY_SUPPLIER = json.dumps({
        "name": "Nike",
        "address": {
            "city": "Test city",
            "district": "Test district",
            "street": "Test street",
            "zipcode": "10000"
          },
        "phone": "080-000-0000"
    })

    create_request(URL_SUPPLIER, CREATE_BODY_SUPPLIER)
    create_request(URL_BRAND, CREATE_BODY_BRAND)
    create_request(URL_COLOR, CREATE_BODY_COLOR)
    create_request(URL_SIZE, CREATE_BODY_SIZE)
    create_request(URL_TYPE, CREATE_BODY_TYPE)
