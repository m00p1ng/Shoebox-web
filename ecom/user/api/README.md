# User API

## Employee

### Create
method **POST** for create employee

URL: /api/user/employee/create

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

***All employee*** URL: /api/user/employee/all

***By username*** URL: /api/user/employee/username/&lt;username>


### Update
method **PUT** for edit employee data

URL: /api/user/employee/update/&lt;username>

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

URL: /api/user/employee/delete/&lt;username>



## Customer

### Create
method **POST** for create employee

URL: /api/user/customer/create

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

***All employee*** URL: /api/user/customer/all

***By username*** URL: /api/user/employee/customer/&lt;username>


### Update
method **PUT** for edit employee data

URL: /api/user/employee/update/&lt;username>

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

URL: /api/user/customer/delete/&lt;username>
