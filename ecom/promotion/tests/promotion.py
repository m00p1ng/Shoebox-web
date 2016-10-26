from django.test import Client
from test_addons import MongoTestCase
from ecom.promotion.api import *
from ecom.promotion.models import Promotions

class Promotion_API_Test(MongoTestCase):
    CLEAR_CACHE = True

    CREATE_URL = '/api/promotion/create'
    CREATE_BODY = """
        {
        	"name": "cutcutcut",
        	"cutpercent": 50,
        	"dateStart": {
        		"year": 2000,
        		"month": 10,
        		"day": 10
        	},
        	"dateEnd": {
        		"year": 2001,
        		"month": 10,
        		"day": 10
        	}
        }
    """

    def test_create_api(self):
        c = Client()
        res = c.post(self.CREATE_URL, data=self.CREATE_BODY, content_type="application/json")
        self.assertEqual(res.content.decode(), 'Promotion created')


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

        UPDATE_URL = '/api/promotion/update/cutcutcut'
        UPDATE_BODY = """
            {
              "name": "cut",
              "dateStart": {
                "year": 1998,
                "month": 10,
                "day":10
              }
            }
        """
        c = Client()
        res = c.put(UPDATE_URL, data=UPDATE_BODY, content_type="application/json")
        self.assertEqual(res.content.decode(), 'Promotion updated')


    def test_update_with_other_method(self):
        c = Client()
        c.post(self.CREATE_URL, data=self.CREATE_BODY, content_type="application/json")

        UPDATE_URL = '/api/promotion/update/cutcutcut'
        UPDATE_BODY = """
            {
              "name": "cut",
              "dateStart": {
                "year": "1998"
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

        DELETE_URL = '/api/promotion/delete/cutcutcut'

        c = Client()
        res = c.delete(DELETE_URL)
        self.assertEqual(res.content.decode(), 'Promotion removed')


    def test_delete_with_other_method(self):
        c = Client()
        c.post(self.CREATE_URL, data=self.CREATE_BODY, content_type="application/json")

        DELETE_URL = '/api/promotion/delete/cutcutcut'

        c = Client()
        res = c.get(DELETE_URL)
        self.assertEqual(res.content.decode(), 'Method not allowed')

        c = Client()
        res = c.post(DELETE_URL)
        self.assertEqual(res.content.decode(), 'Method not allowed')

        c = Client()
        res = c.put(DELETE_URL)
        self.assertEqual(res.content.decode(), 'Method not allowed')
