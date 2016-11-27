import {
  LOAD_SHOP_REQUEST,
  LOAD_SHOP_SUCCESS,
  LOAD_SHOP_FAILURE,

  LOAD_SHOP_BY_BRAND_REQUEST,
  LOAD_SHOP_BY_BRAND_SUCCESS,
  LOAD_SHOP_BY_BRAND_FAILURE,

  CLEAR_PRODUCTS,
} from 'actionTypes'

const initialState = {
  products: [],
  error: false,
  page: 1,
  totalPage: 0,
  totalProduct: 0
}

const shop = (state = initialState, action) => {
  switch(action.type) {
    case LOAD_SHOP_REQUEST:
    case LOAD_SHOP_BY_BRAND_REQUEST:
      return initialState

    case LOAD_SHOP_SUCCESS:
    case LOAD_SHOP_BY_BRAND_SUCCESS:
      return ({
        products: action.payload.data,
        error: false,
        page: action.payload.page,
        totalPage: action.payload.totalpage,
        totalProduct: action.payload.totalproduct
      })

    case LOAD_SHOP_FAILURE:
    case LOAD_SHOP_BY_BRAND_FAILURE:
      return ({
        products: [],
        error: true,
        page: 0,
        totalPage: 0,
        totalProduct: 0
      })

    case CLEAR_PRODUCTS:
      return initialState

    default:
      return state
  }
}

export default shop
