from test_addons import MongoTestCase
from api.include.test import create_request, update_request
import json

class employee_Updated_API_Test(MongoTestCase):
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

    def test_update_api(self):
        create_request(self.URL, self.CREATE_BODY)        
        UPDATE_BODY = """
            {
                "phone" : "086-662-5526"
            }
        """
        res = update_request(self.URL, self.UPDATE_BODY)
        data = json.loads(res.content.decode())

        self.assertEqual(data['updated'], True)

class employee_Update_Fail_API_Test(MongoTestCase):
    pass
