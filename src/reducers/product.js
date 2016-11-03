import {
  LOAD_PRODUCTS_REQUEST,
  LOAD_PRODUCTS_SUCCESS,
  LOAD_PRODUCTS_FAILURE,
  LOAD_PRODUCT_REQUEST,
  LOAD_PRODUCT_SUCCESS,
  LOAD_PRODUCT_FAILURE
} from 'actionTypes'

const initialState = {
  products: [],
  detail: [],
  error: false
}

const products = (state = initialState, action) => {
  switch(action.type) {
    case LOAD_PRODUCTS_SUCCESS:
      return ({
        ...state,
        products: action.payload,
      })
    case LOAD_PRODUCTS_FAILURE:
    return ({
      ...state,
      products: [],
      error: true
    })

    case LOAD_PRODUCT_SUCCESS:
      return ({
        ...state,
        detail: [action.payload]
      })
    case LOAD_PRODUCT_FAILURE:
    return ({
      ...state,
      detail: [],
      error: true
    })
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
  state.products['detail'].find((product) => product.slug === slug) || productNull
)

export default products
