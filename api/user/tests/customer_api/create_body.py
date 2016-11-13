URL_CUSTOMER = '/api/user/customer'

URL_CUSTOMER_USERNAME = '/api/user/customer/mooping12345'

CREATE_BODY = {
    'username': 'mooping12345',
    'password': 'secret',
    'repassword': 'secret',
    'email': 'mail@gmail.com',
    'firstname': 'kaoneaw',
    'lastname': 'mooping',
    'picture' : 'picture url',
    'gender': 'male',
    'birthday': {
        'year': 2000,
        'month': 10,
        'day': 10
    },
    'address': {
        'city': 'my-city',
        'district': 'my-district',
        'street': 'my-street',
        'zipcode': '99999'
    },
    'phone': '080-000-0000',
    'credit' : {
        'type' : 'XXX',
        'id' : '6625526',
        'exp' : '06/12'
    },
    'ship': {
        'city': 'my-city',
        'district': 'my-district',
        'street': 'my-street',
        'zipcode': '99999'
    }
}
