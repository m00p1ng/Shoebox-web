import {
  LOAD_PRODUCTS_REQUEST,
  LOAD_PRODUCTS_SUCCESS,
  LOAD_PRODUCTS_FAILURE,

  CLEAR_PRODUCTS,
} from 'actionTypes'

const initialState = {
  products: [],
  error: false,
  isLoading: false
}

const manProduct = (state = initialState, action) => {
  switch(action.type) {
    case LOAD_PRODUCTS_REQUEST:
      return ({
        products: [],
        error: false,
        isLoading: true
      })

    case LOAD_PRODUCTS_SUCCESS:
      return ({
        products: action.payload,
        error: false,
        isLoading: false
      })
    case LOAD_PRODUCTS_FAILURE:
      return ({
        products: [],
        error: true,
        isLoading: false
      })

    case CLEAR_PRODUCTS:
      return initialState

    default:
      return state
  }
}

export default manProduct
