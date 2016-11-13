from django.test import Client
from test_addons import MongoTestCase

class Order_API_Test(MongoTestCase):
    CLEAR_CACHE = True

    URL_ORDER = '/api/order'
    URL_ORDER_UPDATE = '/api/order/id/'
    URL_ORDERDETAIL = '/api/order/orderDetail'
    URL_ORDERDETAIL_DELETE = '/api/order/orderDetail/0001'
    CREATE_BODY_ORDER = """
        {
            "customer": "mooping12345",
        	"date": {
        		"year": 2000,
        		"month": 10,
        		"day": 10
        	},
            "status": false,
            "orderNumber": ["0001"]
        }
    """

    CREATE_BODY_ORDERDETAIL = """
        	{
        	     "orderNumber": "0001",
        	     "quantity": "5",
        	     "product": "shoe",
                 "promotion": "cutcutcut"
        	}
    """
    def test_create_api(self):
        create_test_database()
        c = Client()
        res_order = c.post(self.URL_ORDER, data=self.CREATE_BODY_ORDER, content_type="application/json")
        c = Client()
        res_order_detail = c.post(self.URL_ORDERDETAIL, data=self.CREATE_BODY_ORDERDETAIL, content_type="application/json")
        self.assertEqual(res_order.content.decode(), 'Order created')
        self.assertEqual(res_order_detail.content.decode(), 'OrderDetail created')

    def test_update_api(self):
        create_test_database()
        c = Client()
        c.post(self.URL_ORDER, data=self.CREATE_BODY_ORDER, content_type="application/json")

        self.URL_ORDER_UPDATE=self.URL_ORDER_UPDATE+str(Orders.objects(username='mooping12345').first().id)
        UPDATE_BODY = """{ "status": true }"""
        c = Client()
        res =c.put(self.URL_ORDER_UPDATE, data=UPDATE_BODY, content_type="application/json")
        self.assertEqual(res.content.decode(), 'Order updated')


    def test_delete_api(self):
        create_test_database()
        c = Client()
        c.post(self.URL_ORDER, data=self.CREATE_BODY_ORDER, content_type="application/json")
        c = Client()
        c.post(self.URL_ORDERDETAIL, data=self.CREATE_BODY_ORDERDETAIL, content_type="application/json")

        self.URL_ORDER_UPDATE=self.URL_ORDER_UPDATE+str(Orders.objects(username='mooping12345').first().id)
        c = Client()
        res_order = c.delete(self.URL_ORDER_UPDATE)
        c = Client()
        res_orderdetail = c.delete(self.URL_ORDERDETAIL_DELETE)
        self.assertEqual(res_order.content.decode(), 'Order removed')
        self.assertEqual(res_orderdetail.content.decode(), 'OrderDetail removed')


def create_test_database():
    URL_CUSTOMER = '/api/user/customer'
    URL_BRAND = '/api/product/brand'
    URL_COLOR = '/api/product/color'
    URL_SIZE = '/api/product/size'
    URL_TYPE = '/api/product/type'
    URL_SUPPLIER = '/api/supplier'
    URL_COMPANY = '/api/supplier/company'
    URL_PRODUCT = '/api/product/'
    URL_PROMOTION = '/api/promotion'

    CREATE_BODY_CUSTOMER = """
    {
        "username": "mooping12345",
	    "password": "secret",
	    "repassword": "secret",
	    "email": "mail@gmail.com",
	    "firstname": "kaoneaw",
	    "lastname": "mooping",
	    "gender": "male",
	    "birthday": {
		    "year": 2000,
		    "month": 10,
		    "day": 10
	    },
	    "address": {
		    "city": "my-city",
		    "district": "my-district",
		    "street": "my-street",
		    "zipcode": "99999"
	    },
	    "ship": {
		    "city": "my-city",
		    "district": "my-district",
		    "street": "my-street",
		    "zipcode": "99999"
	    },
	    "phone": "080-000-0000",
	    "credit": {
		    "type": "Visa",
		    "id": "0000000000000",
	        "exp": {
		        "year": 2000,
		        "month": 10,
		        "day": 10
	        }
	    }
    }
    """

    CREATE_BODY_BRAND = """{ "name": "nike" }"""
    CREATE_BODY_COLOR = """{ "name": "red" }"""
    CREATE_BODY_TYPE = """ { "name": "running" }"""
    CREATE_BODY_SIZE = """{ "name":  "48" }"""

    CREATE_BODY_SUPPLIER = """
        {
        	"company": "nike",
        	"contactFirstname": "Firstname",
            "contactLastname": "Lastname",
            "contactTitle": "Test",
            "phone": "080-000-0000",
            "email": "test@test.com"
        }
    """
    CREATE_BODY_COMPANY = """
        {
        	"name": "Nike",
            "address": {
                "city": "Test city",
                "district": "Test district",
                "street": "Test street",
                "zipcode": "10000"
              }
        }
    """

    CREATE_BODY_PRODUCT = """
    {
        "name": "shoe",
        "supplier": "firstname-lastname",
        "brand": "nike",
        "types": "running",
        "description": "product description",
        "price": 20,
        "picture": "picture URL",
        "amount": 20,
        "size": ["48"],
        "color": ["red"],
        "is_available": true,
        "is_discount": false,
        "discountPercent": 20
    }
    """

    CREATE_BODY_PROMOTION = """
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

    c = Client()
    c.post(URL_BRAND, data=CREATE_BODY_BRAND, content_type="application")
    c = Client()
    c.post(URL_COLOR, data=CREATE_BODY_COLOR, content_type="application")
    c = Client()
    c.post(URL_TYPE, data=CREATE_BODY_TYPE, content_type="application")
    c = Client()
    c.post(URL_SIZE, data=CREATE_BODY_SIZE, content_type="application")
    c = Client()
    c.post(URL_COMPANY, data=CREATE_BODY_COMPANY, content_type="application")
    c = Client()
    c.post(URL_SUPPLIER, data=CREATE_BODY_SUPPLIER, content_type="application")
    c = Client()
    c.post(URL_PRODUCT, data=CREATE_BODY_PRODUCT, content_type="application")
    c = Client()
    c.post(URL_PROMOTION, data=CREATE_BODY_PROMOTION, content_type="application")
    c = Client()
    c.post(URL_CUSTOMER, data=CREATE_BODY_CUSTOMER, content_type="application")
