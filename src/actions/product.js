export function loadProducts() {
  return {
    type: 'RECEIVE_PRODUCTS',
    products: [
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
    ]
  }
}
