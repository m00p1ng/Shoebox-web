from test_addons import MongoTestCase
from api.include.test import create_request
import json

class productSize_Create_API_Test(MongoTestCase):
    CLEAR_CACHE = True

    URL = '/api/product/size'
    URL_SIZE = '/api/product/size/48'
    CREATE_BODY = """{ "name": "48" }"""

    def test_create_api(self):
        res = create_request(self.URL, self.CREATE_BODY)
        data = json.loads(res.content.decode())

        self.assertEqual(data['created'], True)


class productSize_Create_Fail_API_Test(MongoTestCase):
    CLEAR_CACHE = True

    URL = '/api/product/size'

    def test_create_no_name(self):
        CREATE_BODY = """{}"""

        res = create_request(self.URL, CREATE_BODY)
        data = json.loads(res.content.decode())

        self.assertEqual(data['errorMsg'], ['Name cannot empty'])
        self.assertEqual(data['created'], False)


    def test_create_no_data(self):
        CREATE_BODY = ""

        res = create_request(self.URL, CREATE_BODY)
        data = json.loads(res.content.decode())

        self.assertEqual(data['errorMsg'], ['JSON Decode error'])
        self.assertEqual(data['created'], False)


    def test_create_size_dubplicated(self):
        CREATE_BODY = """{"name": "48"}"""

        create_request(self.URL, CREATE_BODY)
        res = create_request(self.URL, CREATE_BODY)
        data = json.loads(res.content.decode())

        self.assertEqual(data['errorMsg'], ['Size already exist'])
        self.assertEqual(data['created'], False)
