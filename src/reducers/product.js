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
        error: false,
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
        error: false,
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

export default products
