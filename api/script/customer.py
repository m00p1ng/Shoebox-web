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
            "phone": fake.phone_number(),
            "picture" : "picture url",
            "gender": fake.random_element(elements=('male', 'female')),
            "birthday": {
                "year": int(fake.year()),
                "month": int(fake.month()),
                "day": int(fake.day_of_month())
            },
            "address": {
                "city": fake.city(),
                "district": fake.state(),
                "street": fake.street_name(),
                "zipcode": fake.zipcode()
            },
            "ship": {
                "city": fake.city(),
                "district": fake.state(),
                "street": fake.street_name(),
                "zipcode": fake.zipcode()
            },
            "credit" : {
                "type" : fake.random_element(elements=('visa', 'master')),
                "id" : fake.credit_card_number(),
                "exp" : fake.credit_card_expire(start="now", end="+10y", date_format="%m/%y")
            }
        }

        res = requests.post(URL, data=json.dumps(payload))

        if res.status_code == 200 or res.status_code == 201:
            print(username, "was created")
        else:
            print(username, "wasn't created")

        response_print(res)


def delete_customer(username):
    URL = "http://localhost:8000/api/user/customer/%s" % username
    res = requests.delete(URL)

    if res.status_code == 200 or res.status_code == 201:
        print(username, "was deleted")
    else:
        print(username, "wasn't deleted")

    response_print(res)


def find_customer(username=0):
    URL = ""
    if username == 0:
        URL = "http://localhost:8000/api/user/customer"
    else:
        URL = "http://localhost:8000/api/user/customer/%s" % username

    res = requests.get(URL)

    if res.status_code == 200 or res.status_code == 201:
        print(username, "found")
    else:
        print(username, "not found")

    response_print(res)


if __name__ == '__main__':
    if sys.argv[1] == 'create':
        if len(sys.argv) == 3:
            gen_customer(int(sys.argv[2]))
        else:
            gen_customer(1)
    elif sys.argv[1] == 'delete':
        delete_customer(sys.argv[2])
    elif sys.argv[1] == 'find':
        if len(sys.argv) == 3:
            find_customer(sys.argv[2])
        else:
            find_customer()
