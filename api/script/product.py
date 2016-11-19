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
        "https://ae01.alicdn.com/kf/HTB1shrTLpXXXXX.XFXXq6xXFXXXB/Women-Shoes-2016-Spring-Summer-Women-Casual-Shoes-8-Colors-Fashion-Canvas-Shoes-Breathable-Solid-Color.jpg",
        "https://ae01.alicdn.com/kf/HTB1WXbeNVXXXXX6XpXXq6xXFXXX9/High-Quality-men-women-breathable-casual-shoes-high-quality-fashion-mens-trainers-luxury-branded-designer-male.jpg",
        "https://ae01.alicdn.com/kf/HTB1gO.0OXXXXXaxXpXXq6xXFXXX5/New-Fashion-Men-Women-Casual-Shoes-Trainers-Air-Mesh-Sport-Jogging-Male-Lovers-Flats-Shoes-Breathable.jpg",
        "http://cdn2.bigcommerce.com/n-biq04i/p1jdk/products/3328/images/72746/1512WS_womens_blue_leather_sneaker_sport_shoes_01__16923.1460009681.1000.1200.jpg?c=2",
        "https://ae01.alicdn.com/kf/HTB1hlyDMVXXXXa7XXXXq6xXFXXXo/Men-font-b-Shoes-b-font-Outdoor-Climbing-Mountain-2016-Large-Size-Sneaker-font-b-Leather.jpg"
    ]
    for i in range(total):
        name = "Sneaker test %s" % i
        payload =  {
            "name": name,
            "brand": "nike",
            "types": "running",
            "description": "product description",
            "price": 200,
            "picture": picture[i%(len(picture))],
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
