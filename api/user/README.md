# User API

## Employee

### Create
method **POST** for create employee

URL: /api/user/employee/

Example

```json
{
	"username": "username",
	"password": "secret",
	"repassword": "secret",
	"email": "mail@facebook.com",
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
	"phone": "080-000-0000"
}
```

### Search
method **GET** for retrieve data

***All employee*** URL: /api/user/employee/

***By username*** URL: /api/user/employee/&lt;username>


### Update
method **PUT** for edit employee data

URL: /api/user/employee/&lt;username>

send some field for update

example: update email and city

```json
{
  "email": "test@email.com",
  "address": {
    "city": "test city"
  }
}
```


### Delete
method **DELETE** for delete employee

URL: /api/user/employee/&lt;username>



## Customer

### Create
method **POST** for create customer

URL: /api/user/customer/

example

```json
{
	"username": "customer",
	"password": "mypassword",
	"repassword": "mypassword",
	"email": "customer@facebook.com",
	"firstname": "customer-name",
	"lastname": "customer-lastname",
	"gender": "female",
	"birthday": {
		"year": 2000,
		"month": 10,
		"day": 10
	},
	"address": {
		"city": "my-city",
		"district": "my-district",
		"street": "my-street",
		"zipcode": "3030"
	},
	"ship": {
		"city": "ship-city",
		"district": "ship-district",
		"street": "ship-street",
		"zipcode": "3030"
	},
	"credit": {
		"id" : "1232324324",
		"type": "visa",
		"exp": {
			"year": 2020,
			"month": 10
		}
	},
	"phone": "08000"
}
```


### Search
method **GET** for retrieve data

***All employee*** URL: /api/user/customer/

***By username*** URL: /api/user/customer/&lt;username>


### Update
method **PUT** for edit custoemr data

URL: /api/user/customer/&lt;username>

send some field for update

example: update email and city

```json
{
  "email": "test@email.com",
  "address": {
    "city": "test city"
  }
}
```


### Delete
method **DELETE** for delete customer

URL: /api/user/customer/&lt;username>
