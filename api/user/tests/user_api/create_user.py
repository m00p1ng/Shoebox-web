def create_user(user):

    if user is 1:
        CREATE_BODY_USER = {
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

    else:
        CREATE_BODY_USER = {
            'username': 'supertam',
            'password': '1q2w3e4r',
            'repassword': '1q2w3e4r',
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
            'phone': '085-555-5555',
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

    return CREATE_BODY_USER

