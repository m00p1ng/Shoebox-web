from django.test import Client
from test_addons import MongoTestCase
from ecom.product.api.productBrand import *
from ecom.product.api.productColor import *
from ecom.product.api.productSize import *
from ecom.product.api.productType import *
from ecom.product.models import productBrand
from ecom.product.models import productColor
from ecom.product.models import productSize
from ecom.product.models import productType


class productBrand_API_Test(MongoTestCase):
    CLEAR_CACHE = True

    URL = '/api/product/productBrand'
    URL_PRODUCTBRAND = '/api/product/productBrand/Nike'
    CREATE_BODY = """
        {
        	"brandname": "nike",
        	"generation": "air max 90"  
        	
        }
    """

    def test_create_api(self):
        c = Client()
        res = c.post(self.URL, data=self.CREATE_BODY, content_type="application/json")
        self.assertEqual(res.content.decode(), 'ProductBrand created')


    def test_update_api(self):
        c = Client()
        c.post(self.URL, data=self.CREATE_BODY, content_type="application/json")

        UPDATE_BODY = """
            {
              "brandname": "nike2",
              "generation": "air min 09"
            }
        """
        c = Client()
        res = c.put(self.URL_PRODUCTBRAND, data=UPDATE_BODY, content_type="application/json")
        self.assertEqual(res.content.decode(), 'ProductBrand updated')


    def test_delete_api(self):
        c = Client()
        c.post(self.URL, data=self.CREATE_BODY, content_type="application/json")

        c = Client()
        res = c.delete(self.URL_PRODUCTBRAND)
        self.assertEqual(res.content.decode(), 'ProductBrand removed')

class productColor_API_Test(MongoTestCase):
    CLEAR_CACHE = True

    URL = '/api/product/productColor'
    URL_PRODUCTCOLOR = '/api/product/productColor/White'
    CREATE_BODY = """
        {
        	"color": "white"  
        	
        }
    """

    def test_create_api(self):
        c = Client()
        res = c.post(self.URL, data=self.CREATE_BODY, content_type="application/json")
        self.assertEqual(res.content.decode(), 'ProducrColor created')


    def test_update_api(self):
        c = Client()
        c.post(self.URL, data=self.CREATE_BODY, content_type="application/json")

        UPDATE_BODY = """
            {
              "color": "Black"
            }
        """
        c = Client()
        res = c.put(self.URL_PRODUCTCOLOR, data=UPDATE_BODY, content_type="application/json")
        self.assertEqual(res.content.decode(), 'ProductColor updated')


    def test_delete_api(self):
        c = Client()
        c.post(self.URL, data=self.CREATE_BODY, content_type="application/json")

        c = Client()
        res = c.delete(self.URL_PRODUCTCOLOR)
        self.assertEqual(res.content.decode(), 'ProductColor removed')

class productSize_API_Test(MongoTestCase):
    CLEAR_CACHE = True

    URL = '/api/product/productSize'
    URL_PRODUCTSIZE = '/api/product/productSize/7'
    CREATE_BODY = """
        {
        	"Size": {
			"USA" : 7,
			"UK" : 6,
			"EU" : 40,
			"JP" : 250
		}
        }
    """

    def test_create_api(self):
        c = Client()
        res = c.post(self.URL, data=self.CREATE_BODY, content_type="application/json")
        self.assertEqual(res.content.decode(), 'ProductSize created')


    def test_update_api(self):
        c = Client()
        c.post(self.URL, data=self.CREATE_BODY, content_type="application/json")

        UPDATE_BODY = """
            {
              "Size": {
			"USA" : 8,
			"UK" : 7,
			"EU" : 41,
			"JP" : 260,
		}
            }
        """
        c = Client()
        res = c.put(self.URL_PRODUCTSIZE, data=UPDATE_BODY, content_type="application/json")
        self.assertEqual(res.content.decode(), 'ProductSize updated')


    def test_delete_api(self):
        c = Client()
        c.post(self.URL, data=self.CREATE_BODY, content_type="application/json")

        c = Client()
        res = c.delete(self.URL_PRODUCTSIZE)
        self.assertEqual(res.content.decode(), 'ProductSize removed')

class productType_API_Test(MongoTestCase):
    CLEAR_CACHE = True

    URL = '/api/product/productType'
    URL_PRODUCTTYPE = '/api/product/productType/running'
    CREATE_BODY = """
        {
        	"Type": "running",
        	"Gender": "men"  
        	
        }
    """

    def test_create_api(self):
        c = Client()
        res = c.post(self.URL, data=self.CREATE_BODY, content_type="application/json")
        self.assertEqual(res.content.decode(), 'ProductType created')


    def test_update_api(self):
        c = Client()
        c.post(self.URL, data=self.CREATE_BODY, content_type="application/json")

        UPDATE_BODY = """
            {
              "Type": "sneaker",
              "Gender": "women"
            }
        """
        c = Client()
        res = c.put(self.URL_PRODUCTTYPE, data=UPDATE_BODY, content_type="application/json")
        self.assertEqual(res.content.decode(), 'ProductType updated')


    def test_delete_api(self):
        c = Client()
        c.post(self.URL, data=self.CREATE_BODY, content_type="application/json")

        c = Client()
        res = c.delete(self.URL_PRODUCTTYPE)
        self.assertEqual(res.content.decode(), 'ProductType removed')
