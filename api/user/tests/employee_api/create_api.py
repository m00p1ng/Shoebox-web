from test_addons import MongoTestCase
from api.include.test import create_request
import json

class employee_Create_API_Test(MongoTestCase):
    CLEAR_CACHE = True

    URL = '/api/user/employee'
    URL_USERNAME = '/api/user/employee/mooping12345'
    CREATE_BODY = """
        {
        	"username": "mooping12345",
        	"password": "secret",
        	"repassword": "secret",
        	"email": "mail@gmail.com",
        	"firstname": "kaoneaw",
        	"lastname": "mooping",
        	"gender": "male",
        	"birthday": {
        		"year": 2000,
        		"month": 10,
        		"day": 10
        	},
        	"address": {
        		"city": "my-city",
        		"district": "my-district",
        		"street": "my-street",
        		"zipcode": "99999"
        	},
        	"phone": "080-000-0000"
        }
    """

    def test_create_api(self):
        res = create_request(self.URL, self.CREATE_BODY)
        data = json.loads(res.content.decode())

        self.assertEqual(data['created'], True)

class employee_Create_Fail_API_Test(MongoTestCase):
    CLEAR_CACHE = True

    URL = '/api/user/employee' 

   def test_create_no_firstname(self):
        CREATE_BODY =  """
        {
        	"username": "mooping12345",
        	"password": "secret",
        	"repassword": "secret",
        	"email": "mail@gmail.com",
        	"lastname": "mooping",
        	"gender": "male",
        	"birthday": {
        		"year": 2000,
        		"month": 10,
        		"day": 10
        	},
        	"address": {
        		"city": "my-city",
        		"district": "my-district",
        		"street": "my-street",
        		"zipcode": "99999"
        	},
        	"phone": "080-000-0000"
        }
    """
        res = create_request(self.URL, CREATE_BODY)
        data = json.loads(res.content.decode())
        self.assertEqual(data['errorMsg'], ['Username cannot empty'])
        self.assertEqual(data['created'], False)

    def test_create_no_data(self):
        CREATE_BODY = ""
        res = create_request(self.URL, CREATE_BODY)
        data = json.loads(res.content.decode())
        self.assertEqual(data['errorMsg'], ['JSON Decode error'])
        self.assertEqual(data['created'], False)

     def test_create_username_duplicated(self):
        CREATE_BODY = """{"username" : "mooping12345"}"""
        create_request(self.URL, CREATE_BODY)
        res = create_request(self.URL, CREATE_BODY)
        data = json.loads(res.content.decode())
        self.assertEqual(data['errorMsg'], ['Username already exist'])
        self.assertEqual(data['created'], False)


