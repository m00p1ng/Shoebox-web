URL_EMPLOYEE = '/api/user/employee'

URL_EMPLOYEE_USERNAME = '/api/user/employee/mooping12345'

CREATE_BODY = {
	'username': 'mooping12345',
	'password': 'secret',
	'repassword': 'secret',
	'email': 'mail@gmail.com',
	'firstname': 'kaoneaw',
	'lastname': 'mooping',
    'picture': 'picture URL',
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
	'phone': '080-000-0000'
}
