from test_addons import MongoTestCase
from api.include.test import create_request
from .create_body import *
import json

class customer_Create_API_Test(MongoTestCase):
    CLEAR_CACHE = True

    def test_create_api(self):
        res = create_request(URL_CUSTOMER, CREATE_BODY)
        data = json.loads(res.content.decode())

        self.assertEqual(data['created'], True)


class customer_Create_Fail_API_Test(MongoTestCase):
    CLEAR_CACHE = True

    def test_create_no_firstname(self):
        CREATE_BODY = json.dumps({})
        res = create_request(URL_CUSTOMER, CREATE_BODY)
        data = json.loads(res.content.decode())

        self.assertEqual(data['errorMsg'], [
            "Username cannot empty",
            "Password cannot empty",
            "Repassword cannot empty",
            "Email cannot empty",
            "Firstname cannot empty",
            "Lastname cannot empty",
            "Gender cannot empty",
            "Birthday cannot empty",
            "Year cannot empty",
            "Month cannot empty",
            "Day cannot empty",
            "Address cannot empty",
            "City cannot empty",
            "District cannot empty",
            "Street cannot empty",
            "Zipcode cannot empty",
            "Ship address cannot empty",
            "City cannot empty",
            "District cannot empty",
            "Street cannot empty",
            "Zipcode cannot empty",
            "Credit card cannot empty",
            "Phone cannot empty"
        ])
        self.assertEqual(data['created'], False)


    def test_create_no_data(self):
        CREATE_BODY = ""

        res = create_request(URL_CUSTOMER, CREATE_BODY)
        data = json.loads(res.content.decode())

        self.assertEqual(data['errorMsg'], ['JSON Decode error'])
        self.assertEqual(data['created'], False)
