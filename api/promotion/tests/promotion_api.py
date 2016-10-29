from django.test import Client
from test_addons import MongoTestCase
from api.promotion.models import Promotions

class Promotion_API_Test(MongoTestCase):
    CLEAR_CACHE = True

    URL = '/api/promotion'
    URL_PROMOTION = '/api/promotion/cutcutcut'
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
        res = c.post(self.URL, data=self.CREATE_BODY, content_type="application/json")
        self.assertEqual(res.content.decode(), 'Promotion created')


    def test_update_api(self):
        c = Client()
        c.post(self.URL, data=self.CREATE_BODY, content_type="application/json")

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
        res = c.put(self.URL_PROMOTION, data=UPDATE_BODY, content_type="application/json")
        self.assertEqual(res.content.decode(), 'Promotion updated')


    def test_delete_api(self):
        c = Client()
        c.post(self.URL, data=self.CREATE_BODY, content_type="application/json")

        c = Client()
        res = c.delete(self.URL_PROMOTION)
        self.assertEqual(res.content.decode(), 'Promotion removed')
