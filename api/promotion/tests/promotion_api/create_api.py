from test_addons import MongoTestCase
from api.include.test import create_request
import json


class employee_Create_API_Test(MongoTestCase):
    CLEAR_CACHE = True

    URL = '/api/promotion/'
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

    def test_create_api(self):
        res = create_request(self.URL, self.CREATE_BODY)
        data = json.loads(res.content.decode())
        self.assertEqual(data['created'], True)

class promotion_Create_Fail_API_Test(MongoTestCase):
    CLEAR_CACHE = True

    URL = '/api/promotion/'

    def test_create_empty(self):
        CREATE_BODY = """{}"""
        res = create_request(self.URL, CREATE_BODY)
        data = json.loads(res.content.decode())
        self.assertEqual(data['errorMsg'],[
            "Promotion name cannot empty",
            "Price cut cannot empty",
            "Start date cannot empty",
            "- Start year cannot empty",
            "- Start month cannot empty",
            "- Start day cannot empty",
            "End date cannot empty",
            "- End year cannot empty",
            "- End month cannot empty",
            "- End day cannot empty",
        ])
        self.assertEqual(data['created'], False)


    def test_create_name_duplicated(self):
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
        create_request(self.URL, CREATE_BODY)
        res = create_request(self.URL, CREATE_BODY)
        data = json.loads(res.content.decode())

        self.assertEqual(data['errorMsg'],['promotion already exist'])
        self.assertEqual(data['created'], False)


    def test_create_JSON(self):
        CREATE_BODY = ""
        res = create_request(self.URL, CREATE_BODY)
        data = json.loads(res.content.decode())
        self.assertEqual(data['errorMsg'],['JSON Decode error'])
        self.assertEqual(data['created'], False)

