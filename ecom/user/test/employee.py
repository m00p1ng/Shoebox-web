from django.test import Client
from test_addons import MongoTestCase
from ecom.user.api.employee import *
from ecom.user.model.employee import Employees

class Employee_API_Test(MongoTestCase):
    CLEAR_CACHE = True

    CREATE_URL = '/api/user/employee/create'
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
        c = Client()
        res = c.post(self.CREATE_URL, data=self.CREATE_BODY, content_type="application/json")
        self.assertEqual(res.content.decode(), 'Employee created')


    def test_create_with_other_method(self):
        c = Client()
        res = c.get(self.CREATE_URL)
        self.assertEqual(res.content.decode(), 'Method not allowed')

        c = Client()
        res = c.put(self.CREATE_URL, data=self.CREATE_BODY, content_type="application/json")
        self.assertEqual(res.content.decode(), 'Method not allowed')

        c = Client()
        res = c.delete(self.CREATE_URL, data=self.CREATE_BODY, content_type="application/json")
        self.assertEqual(res.content.decode(), 'Method not allowed')


    def test_update_api(self):
        c = Client()
        c.post(self.CREATE_URL, data=self.CREATE_BODY, content_type="application/json")

        UPDATE_URL = '/api/user/employee/update/mooping12345'
        UPDATE_BODY = """
            {
              "email": "test@email.com",
              "address": {
                "city": "test city"
              }
            }
        """
        c = Client()
        res = c.put(UPDATE_URL, data=UPDATE_BODY, content_type="application/json")
        self.assertEqual(res.content.decode(), 'Employee updated')


    def test_update_with_other_method(self):
        c = Client()
        c.post(self.CREATE_URL, data=self.CREATE_BODY, content_type="application/json")

        UPDATE_URL = '/api/user/employee/update/mooping12345'
        UPDATE_BODY = """
            {
              "email": "test@email.com",
              "address": {
                "city": "test city"
              }
            }
        """

        c = Client()
        res = c.get(UPDATE_URL)
        self.assertEqual(res.content.decode(), 'Method not allowed')

        c = Client()
        res = c.post(UPDATE_URL, data=UPDATE_BODY, content_type="application/json")
        self.assertEqual(res.content.decode(), 'Method not allowed')

        c = Client()
        res = c.delete(UPDATE_URL, data=UPDATE_BODY, content_type="application/json")
        self.assertEqual(res.content.decode(), 'Method not allowed')


    def test_delete_api(self):
        c = Client()
        c.post(self.CREATE_URL, data=self.CREATE_BODY, content_type="application/json")

        DELETE_URL = '/api/user/employee/delete/mooping12345'

        c = Client()
        res = c.delete(DELETE_URL)
        self.assertEqual(res.content.decode(), 'Employee removed')


    def test_delete_with_other_method(self):
        c = Client()
        c.post(self.CREATE_URL, data=self.CREATE_BODY, content_type="application/json")

        DELETE_URL = '/api/user/employee/delete/mooping12345'

        c = Client()
        res = c.get(DELETE_URL)
        self.assertEqual(res.content.decode(), 'Method not allowed')

        c = Client()
        res = c.post(DELETE_URL)
        self.assertEqual(res.content.decode(), 'Method not allowed')

        c = Client()
        res = c.put(DELETE_URL)
        self.assertEqual(res.content.decode(), 'Method not allowed')
