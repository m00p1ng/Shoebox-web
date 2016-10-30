from django.test import Client
from test_addons import MongoTestCase
from api.user.models import Employees
import json

class Customer_API_Test(MongoTestCase):
    CLEAR_CACHE = True

    URL = '/api/user/customer'
    URL_USERNAME = '/api/user/customer/mooping12345'

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
        	"phone": "080-000-0000",
            "credit" : {
                "type" : "XXX",
                "id" : "6625526",
                "exp" : {
                    "year": 2000,
        		    "month": 10,
        		    "day": 10},
            },
            "ship": {w
        		"city": "my-city",
        		"district": "my-district",
        		"street": "my-street",
        		"zipcode": "99999"
        	},
        }
    """

    def test_create_api(self):
        c = Client()
        res = c.post(self.URL, data=self.CREATE_BODY, content_type="application/json")
        self.assertEqual(res.content.decode(), 'Customer created')


    def test_update_api(self):
        c = Client()
        c.post(self.URL, data=self.CREATE_BODY, content_type="application/json")

        UPDATE_BODY = """
            {
                "email": "test@email.com",
                "address": {
                    "city": "test city"
                },
                "phone" : "086-662-5526" 
            }
        """
        c = Client()
        res = c.put(self.URL_USERNAME, data=UPDATE_BODY, content_type="application/json")
        self.assertEqual(res.content.decode(), 'Employee updated')


    def test_delete_api(self):
        c = Client()
        c.post(self.URL, data=self.CREATE_BODY, content_type="application/json")

        c = Client()
        res = c.delete(self.URL_USERNAME)
        self.assertEqual(res.content.decode(), 'Employee removed')


    def test_search_by_username(self):
        c = Client()
        c.post(self.URL, data=self.CREATE_BODY, content_type="application/json")

        c = Client()
        res = c.get(self.URL_USERNAME)
        data = json.loads(res.content.decode())

        self.assertEqual(data['username'], 'mooping12345')
        self.assertEqual(data['email'], 'mail@gmail.com')
        self.assertEqual(data['firstname'], 'kaoneaw')
        self.assertEqual(data['lastname'], 'mooping')
        self.assertEqual(data['gender'], 'male')
        self.assertEqual(data['address']['city'], 'my-city')
        self.assertEqual(data['address']['district'], 'my-district')
        self.assertEqual(data['address']['street'], 'my-street')
        self.assertEqual(data['address']['zipcode'], '99999')
        self.assertEqual(data['phone'], '080-000-0000')
        self.assertEqual(data['role'], 'customer')
        self.assertEqual(data['is_active'], True)
        self.assertEqual(data['birthday']['day'], 10)
        self.assertEqual(data['birthday']['month'], 10)
        self.assertEqual(data['birthday']['year'], 2000)
        self.assertEqual(data['credit']['type'], 'XXX')
        self.assertEqual(data['credit']['id'], 6625526)
        self.assertEqual(data['credit']['exp']['day'], 10)
        self.assertEqual(data['credit']['exp']['month'], 10)
        self.assertEqual(data['credit']['exp']['year'], 2000)
        self.assertEqual(data['ship']['city'], 'my-city')
        self.assertEqual(data['ship']['district'], 'my-district')
        self.assertEqual(data['ship']['street'], 'my-street')
        self.assertEqual(data['ship']['zipcode'], '99999') 
