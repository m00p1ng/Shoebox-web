import {
  LOAD_PRODUCTS_SUCCESS,
  LOAD_PRODUCTS_FAILURE,
  LOAD_PRODUCT_SUCCESS,
  LOAD_PRODUCT_FAILURE
} from 'actionTypes'

const initialState = []

const products = (state = initialState, action) => {
  switch(action.type) {
    case LOAD_PRODUCTS_SUCCESS:
      return action.payload
    case LOAD_PRODUCT_SUCCESS:
      return [action.payload]
    default:
      return state
  }
}

const productNull = {
	name: '',
	brand: '',
	types: '',
	description: '',
	price: null,
	picture: '',
	date : {
		year: null,
		month: null,
		day: null
	},
	amount: null,
	size: [],
	color: [],
	is_available: null,
	is_discount: null,
	discountPercent : null
}

export const getProductBySlug = (state, slug) => (
  state.products.find((product) => product.slug === slug) || productNull
)

export default products
