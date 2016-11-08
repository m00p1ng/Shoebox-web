#!/usr/bin/env python3
from faker import Faker
import requests
import time
import sys
import json

fake = Faker()


def gen_customer(total):
    URL = "http://localhost:8000/api/user/customer/"
    for i in range(total):
        username = fake.user_name()
        payload =  {
            "username": username,
            "password": "supertam",
            "repassword": "supertam",
            "email": fake.email(),
            "firstname": fake.first_name(),
            "lastname":  fake.last_name(),
            "picture" : "picture url",
            "gender": "male",
            "birthday": {
                "year": 2000,
                "month": 10,
                "day": 10
                },
            "address": {
                "city": fake.city(),
                "district": "eiei",
                "street": fake.street_name(),
                "zipcode": fake.zipcode()
                },
            "ship": {
                "city": fake.city(),
                "district": "my-district",
                "street": fake.street_name(),
                "zipcode": fake.zipcode()
                },
            "phone": fake.phone_number(),
            "credit" : {
                "type" : "XXX",
                "id" : fake.credit_card_number,
                "exp" : {
                    "year": 2000,
                    "month": 10
                }
            },
        }

        res = requests.post(URL, data=json.dumps(payload))

        if res.status_code == 200:
            print(username, "was created")
        else:
            print(username, "wasn't created")

        print(res.text)
        print()


def delete_customer(username):
    URL = "http://localhost:8000/api/user/customer/%s" % username
    res = requests.delete(URL)

    if res.status_code == 200:
        print(username, "was deleted")
    else:
        print(username, "wasn't deleted")

    print(res.text)
    print()


def find_customer(username):
    URL = "http://localhost:8000/api/user/customer/%s" % username

    res = requests.get(URL)

    if res.status_code == 200:
        print(username, "found")
    else:
        print(username, "not found")

    print(res.text)
    print()


if __name__ == '__main__':
    if sys.argv[1] == 'create':
        gen_customer(int(sys.argv[2]))
    elif sys.argv[1] == 'delete':
        delete_customer(sys.argv[2])
    elif sys.argv[1] == 'find':
        find_customer(sys.argv[2])
