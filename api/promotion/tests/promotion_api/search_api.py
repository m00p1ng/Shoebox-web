from django.test import Client
from test_addons import MongoTestCase
from api.include.test import create_request
import json

class promotion_Search_API_Test(MongoTestCase):
    CLEAR_CACHE = True

    URL = '/api/promotion'
    URL_PROMOTION = '/api/promotion/free'
    CREATE_BODY = """
        {
        	"name" : "FREE",
            "cutpercent" : 100,
            "dateStart" : {
                "year" : 2016,
                "month" : 11,
                "day" : 10
            },
            "dateEnd" : {
                "year" : 2020,
                "month" : 11,
                "day" : 10
            }
        }
    """


    def test_search_api(self):
        create_request(self.URL, self.CREATE_BODY)

        c = Client()
        res = c.get(self.URL_PROMOTION)
        data = json.loads(res.content.decode())

        self.assertEqual(data['name'], 'FREE')
        self.assertEqual(data['cutpercent'], 100)


class promotion_Search_Fail_API_Test(MongoTestCase):
    CLEAR_CACHE = True

    URL = '/api/promotion'
    URL_SEARCH = '/api/promotion/cut'


    def test_search_no_promotion(self):
        c = Client()
        res = c.get(self.URL_SEARCH)

        self.assertEqual(res.content.decode(), 'Not found')

