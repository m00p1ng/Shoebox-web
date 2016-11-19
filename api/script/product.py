#!/usr/bin/env python3
from faker import Faker
import requests
import sys
import json

fake = Faker()
PRODUCT_API_ROOT = "http://localhost:8000/api/product"

def response_print(res):
    print()
    print("Response:")
    print(res.text)
    print('--------------------')
    print()


def gen_customer(total):
    URL = PRODUCT_API_ROOT
    picture = [
        "http://www.freetrainer3-0.org.uk/images/nike-sneaker-womens-roshe-run-print-light-magenta-purple-z413_2.jpg",
        "http://static.highsnobiety.com/wp-content/uploads/2015/12/03162839/best-sneaker-featured-960x576.jpg",
        "http://weartesters.com/wp-content/uploads/2014/09/nike-air-force-1-duckboot-2.jpg",
        "https://s-media-cache-ak0.pinimg.com/originals/9a/9c/45/9a9c45b640f98cf34c66f4c57a9feec5.jpg",
        "https://s3-ap-southeast-1.amazonaws.com/wpimage.shopspotapp.com/wp-content/uploads/2015/10/nike-roshe-one-camo-print-2-960x576.jpg",
        "http://www.hyp-boost.com/images/product/zxflux-0617-73_2_6.jpg",
        "http://static.highsnobiety.com/wp-content/uploads/2015/12/18110730/asics-x-ronnie-fieg-homage-0.jpg"
    ]
    for i in range(total):
        name = "Sneaker test %s" % i
        payload =  {
            "name": name,
            "brand": "nike",
            "types": "running",
            "description": "product description",
            "price": 200,
            "picture": picture[i%7],
            "date" : {
                "year": 2016,
                "month": 10,
                "day": 10
            },
            "amount": 20,
            "size": ["48"],
            "color": ["red"],
            "is_available": True,
            "is_discount": False,
            "supplier": "nike",
            "discountPercent" : 20
        }

        res = requests.post(URL, data=json.dumps(payload))

        if res.status_code == 200 or res.status_code == 201:
            print(name, "was created")
        else:
            print(name, "wasn't created")

        response_print(res)


if __name__ == '__main__':
    if sys.argv[1] == 'create':
        if len(sys.argv) == 3:
            gen_customer(int(sys.argv[2]))
        else:
            gen_customer(1)
