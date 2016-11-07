import {
  LOAD_PRODUCTS_REQUEST,
  LOAD_PRODUCTS_SUCCESS,
  LOAD_PRODUCTS_FAILURE,

  LOAD_PRODUCT_REQUEST,
  LOAD_PRODUCT_SUCCESS,
  LOAD_PRODUCT_FAILURE,

  CLEAR_ERROR,
  CLEAR_DETAIL
} from 'actionTypes'

const initialState = {
  products: [],
  detail: [],
  error: false
}

const setProductState = (state, action) => {
  if(state.products.length === 0){
    return [action.payload]
  }
  else {
    return state.products
  }
}

const products = (state = initialState, action) => {
  switch(action.type) {
    case CLEAR_ERROR:
      return ({
        ...state,
        error: false
      })

    case CLEAR_DETAIL:
      return ({
        ...state,
        detail: []
      })

    case LOAD_PRODUCTS_SUCCESS:
      return ({
        ...state,
        error: false,
        products: action.payload,
      })
    case LOAD_PRODUCTS_FAILURE:
      return ({
        detail: [],
        products: [],
        error: true
      })

    case LOAD_PRODUCT_SUCCESS:
      return ({
        products: setProductState(state, action),
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
