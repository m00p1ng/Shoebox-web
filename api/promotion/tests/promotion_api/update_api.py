from test_addons import MongoTestCase
from api.include.test import create_request, update_request
import json

class productBrand_Update_API_Test(MongoTestCase):
    CLEAR_CACHE = True

    URL = '/api/promotion/'
    URL_BRAND = '/api/promotion/free'
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


    def test_update_api(self):
        create_request(self.URL, self.CREATE_BODY)

        UPDATE_BODY = """{"name" : "FREE2"}"""

        res = update_request(self.URL_BRAND, UPDATE_BODY)
        data = json.loads(res.content.decode())

        self.assertEqual(data['updated'], True)

class productBrand_Update_Fail_API_Test(MongoTestCase):
    CLEAR_CACHE = True
    URL = '/api/promotion'
    URL_NAME = '/api/promotion/free'
    CREATE_BODY = """
        {
        	"name" : "free",
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

    def test_update_no_data(self):
        UPDATE_BODY = "{}"

        create_request(self.URL, self.CREATE_BODY)
        res = update_request(self.URL_NAME, UPDATE_BODY)
        data = json.loads(res.content.decode())

        self.assertEqual(data['errorMsg'], ['Data cannot empty'])
        self.assertEqual(data['updated'], False)

    def test_update_no_promotion(self):
        UPDATE_BODY = """
            {
                "cutpercent" : 10
            }
        """
        URL_NAME = '/api/promotion/FREE2'
        create_request(self.URL, self.CREATE_BODY)        
        res = update_request(URL_NAME, UPDATE_BODY)
        data = json.loads(res.content.decode())
        self.assertEqual(data['errorMsg'],['This promotion not exist'])
        self.assertEqual(data['updated'], False)
    
    def test_update_JSON_error(self):
        UPDATE_BODY = ""

        create_request(self.URL, self.CREATE_BODY)
        res = update_request(self.URL_NAME, UPDATE_BODY)
        data = json.loads(res.content.decode())

        self.assertEqual(data['errorMsg'], ['JSON Decode error'])
        self.assertEqual(data['updated'], False)
