#!/usr/bin/env python3
from faker import Faker
from pprint import pprint
import requests
import time
import sys
import json

fake = Faker()


def response_print(res):
    print()
    print("Response:")
    print(res.text)
    print('--------------------')
    print()


def gen_supplier(total):
    URL = "http://localhost:8000/api/supplier/"
    supplier_list = [
        "Nike",
        "Puma",
        "Bata",
        "Addidas",
        "Converse"
    ]
    for i in range(total):
        name = supplier_list[i]
        payload =  {
            "name": name,
            "phone": fake.phone_number(),
            "address": {
                "city": fake.city(),
                "district": fake.state(),
                "street": fake.street_name(),
                "zipcode": fake.zipcode()
            },
        }

        res = requests.post(URL, data=json.dumps(payload))

        if res.status_code == 200 or res.status_code == 201:
            print(name, "was created")
        else:
            print(name, "wasn't created")

        response_print(res)


def delete_supplier(name):
    URL = "http://localhost:8000/api/supplier/%s" % name
    res = requests.delete(URL)

    if res.status_code == 200 or res.status_code == 201:
        print(name, "was deleted")
    else:
        print(name, "wasn't deleted")

    response_print(res)


def find_supplier(name=0):
    URL = ""
    if name == 0:
        URL = "http://localhost:8000/api/supplier"
    else:
        URL = "http://localhost:8000/api/name/supplier/%s" % name

    res = requests.get(URL)

    if res.status_code == 200 or res.status_code == 201:
        print(name, "found")
    else:
        print(name, "not found")

    response_print(res)


if __name__ == '__main__':
    if sys.argv[1] == 'create':
        if len(sys.argv) == 3 and sys.argv[2] == 'list':
            gen_supplier(5)
        else:
            gen_supplier(1)
    elif sys.argv[1] == 'delete':
        delete_supplier(sys.argv[2])
    elif sys.argv[1] == 'find':
        if len(sys.argv) == 3:
            find_supplier(sys.argv[2])
        else:
            find_supplier()
