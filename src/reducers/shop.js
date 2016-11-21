import {
  LOAD_SHOP_REQUEST,
  LOAD_SHOP_SUCCESS,
  LOAD_SHOP_FAILURE,

  CLEAR_PRODUCTS,
} from 'actionTypes'

const initialState = {
  products: [],
  error: false,
  page: 1,
  totalPage: 1,
  totalProduct: 0
}

const shop = (state = initialState, action) => {
  switch(action.type) {
    case LOAD_SHOP_REQUEST:
      return ({
        ...state,
        error: false,
      })

    case LOAD_SHOP_SUCCESS:
      return ({
        ...state,
        error: false,
        products: action.payload.data,
      })
    case LOAD_SHOP_FAILURE:
      return ({
        products: [],
        error: true
      })

    case CLEAR_PRODUCTS:
      return initialState

    default:
      return state
  }
}

export default shop
