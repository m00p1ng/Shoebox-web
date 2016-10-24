# Product API

## Product

### Create
method POST to create Product

URL: /api/product/create

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

#### by name
URL: /api/product/name/<productName>

#### by size
URL: /api/product/size/<productSize>

#### by type
URL: /api/product/type/<productType>

#### by brand
URL: /api/product/type/<productBrand>

### Update
method PUT for edit product data

URL: /api/user/product/update/<product-slug>

send some field for update

example: update amount and brand

```json
{
  "amount": 20,
  "brand": "adidas"
}
```
