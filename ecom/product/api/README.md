# Product API

## Product

### Create

URL: /api/product/create

method POST to create Product

example

```json
{
	"name": "product name",
	"brand": "brand slug",
	"types": "types slug",
	"description": "product description",
	"price": 20,
	"picture": "picture URL",
	"date" : {
		"year": 2016,
		"month": 10,
		"day": 10
	},
	"amount": 20,
	"size": ["size slug", "size2 slug"],
	"color": ["color1 slug", "color2 slug", "color3 slug"],
	"is_available": true,
	"is_discount": false,
	"discountPercent" : 20
}
```

### Search

method GET to retrieve data

#### All product
URL: /api/product/all
