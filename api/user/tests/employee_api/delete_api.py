from django.test import Client
from test_addons import MongoTestCase
from api.include.test import create_request
import json

class employee_Delete_API_Test(MongoTestCase):
    CLEAR_CACHE = True

    URL = '/api/user/employee'
    URL_EMPLOYEE = '/api/user/employee/mooping12345'
    CREATE_BODY = """
        {
        	"username": "mooping12345",
        	"password": "secret",
        	"repassword": "secret",
        	"email": "mail@gmail.com",
        	"firstname": "kaoneaw",
        	"lastname": "mooping",
            "picture": "picture URL",
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

    def test_delete_api(self):
        create_request(self.URL, self.CREATE_BODY)

        c = Client()
        res = c.delete(self.URL_EMPLOYEE)
        data = json.loads(res.content.decode())

        self.assertEqual(data['deleted'], True)


class employee_Delete_Fail_API_Test(MongoTestCase):
    CLEAR_CACHE = True

    URL = '/api/user/employee'
    URL_EMPLOYEE = '/api/user/employee/mooping12345'

    def test_delete_brand_not_exist(self):

        c = Client()
        res = c.delete(self.URL_EMPLOYEE)
        data = json.loads(res.content.decode())

        self.assertEqual(data['deleted'], False)
