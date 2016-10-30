from django.test import Client
from test_addons import MongoTestCase
from api.order.models import *
from api.user.models import customer

class Order_API_Test(MongoTestCase):
    CLEAR_CACHE = True

    URL = '/api/order'
    URL_ORDER = '/api/order/id/'
    CREATE_BODY = """
        {
            "customer": "mooping12345",
        	"date": {
        		"year": 2000,
        		"month": 10,
        		"day": 10
        	},
            "status": false
        }
    """

    def test_create_api(self):
        create_test_database()
        c = Client()
        res = c.post(self.URL, data=self.CREATE_BODY, content_type="application/json")
        self.assertEqual(res.content.decode(), 'Order created')


    def test_update_api(self):
        create_test_database()
        c = Client()
        c.post(self.URL, data=self.CREATE_BODY, content_type="application/json")

        self.URL_ORDER=self.URL_ORDER+str(Orders.objects(username='mooping12345').first().id)
        UPDATE_BODY = """{ "status": true }"""
        c = Client()
        res =c.put(self.URL_ORDER, data=UPDATE_BODY, content_type="application/json")
        self.assertEqual(res.content.decode(), 'Order updated')


    def test_delete_api(self):
        create_test_database()
        c = Client()
        c.post(self.URL, data=self.CREATE_BODY, content_type="application/json")

        self.URL_ORDER=self.URL_ORDER+str(Orders.objects(username='mooping12345').first().id)
        c = Client()
        res = c.delete(self.URL_ORDER)
        self.assertEqual(res.content.decode(), 'Order removed')


def create_test_database():
    URL = '/api/user/customer'
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
	    "ship": {
		    "city": "my-city",
		    "district": "my-district",
		    "street": "my-street",
		    "zipcode": "99999"
	    },
	    "phone": "080-000-0000",
	    "credit": {
		    "type": "Visa",
		    "id": "0000000000000",
	        "exp": {
		        "year": 2000,
		        "month": 10,
		        "day": 10
	        }
	    }
    }
    """
    c = Client()
    c.post(URL, data=CREATE_BODY, content_type="application/json")

