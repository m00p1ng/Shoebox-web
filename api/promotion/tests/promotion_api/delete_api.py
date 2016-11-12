from django.test import Client
from test_addons import MongoTestCase
from api.include.test import create_request
import json

class employee_Delete_API_Test(MongoTestCase):
    CLEAR_CACHE = True

    URL = '/api/promotion'
    URL_NAME = '/api/promotion/free'
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

    def test_delete_api(self):
        create_request(self.URL, self.CREATE_BODY)
        c = Client()
        res = c.delete(self.URL_NAME)
        data = json.loads(res.content.decode())
        self.assertEqual(data['deleted'], True)
        

class employee_Delete_Fail_API_Test(MongoTestCase):
    CLEAR_CACHE = True

    URL = '/api/promotion/'
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


    def test_delete_employee_not_exist(self):
        URL_NAME = '/api/promotion/FREE2'
        create_request(self.URL, self.CREATE_BODY)        

        c = Client()
        res = c.delete(URL_NAME)
        data = json.loads(res.content.decode())
        self.assertEqual(data['errorMsg'],['This promotion not exist'])
        self.assertEqual(data['deleted'], False)

