from test_addons import MongoTestCase
from api.include.test import create_request
import json

class productType_Create_API_Test(MongoTestCase):
    CLEAR_CACHE = True

    URL = '/api/product/type'
    URL_TYPE = '/api/product/type/running'
    CREATE_BODY = """{ "name": "running" }"""

    def test_create_api(self):
        res = create_request(self.URL, self.CREATE_BODY)
        data = json.loads(res.content.decode())

        self.assertEqual(data['created'], True)


class productType_Create_Fail_API_Test(MongoTestCase):
    CLEAR_CACHE = True

    URL = '/api/product/type'

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


    def test_create_type_dubplicated(self):
        CREATE_BODY = """{"name": "Running"}"""

        create_request(self.URL, CREATE_BODY)
        res = create_request(self.URL, CREATE_BODY)
        data = json.loads(res.content.decode())

        self.assertEqual(data['errorMsg'], ['Type already exist'])
        self.assertEqual(data['created'], False)
