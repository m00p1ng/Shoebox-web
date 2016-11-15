from .create_data import *
from django.test import Client
from test_addons import MongoTestCase
from api.include.test import create_request
import json

class productColor_Delete_API_Test(MongoTestCase):
    CLEAR_CACHE = True

    URL = '/api/product/color'
    URL_COLOR = '/api/product/color/white'
    CREATE_BODY = create_data()


    def test_delete_api(self):
        create_request(self.URL, json.dumps(self.CREATE_BODY))

        c = Client()
        res = c.delete(self.URL_COLOR)
        data = json.loads(res.content.decode())

        self.assertEqual(data['deleted'], True)


class productColor_Delete_Fail_API_Test(MongoTestCase):
    CLEAR_CACHE = True

    URL = '/api/product/color'
    URL_COLOR = '/api/product/color/white'
    CREATE_BODY = create_data()

    def test_delete_color_not_exist(self):
        URL_COLOR = '/api/product/color/yellow'
        create_request(self.URL, json.dumps(self.CREATE_BODY))

        c = Client()
        res = c.delete(URL_COLOR)
        data = json.loads(res.content.decode())

        self.assertEqual(data['deleted'], False)

