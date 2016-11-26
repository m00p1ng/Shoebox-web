import {
  LOAD_PRODUCTS_REQUEST,
  LOAD_PRODUCTS_SUCCESS,
  LOAD_PRODUCTS_FAILURE,
} from 'actionTypes'

const initialState = {
  products: [],
  error: false,
  page: 1,
  totalPage: 0,
  totalProduct: 0
}

const manProduct = (state = initialState, action) => {
  switch(action.type) {
    case LOAD_PRODUCTS_REQUEST:
      return initialState

    case LOAD_PRODUCTS_SUCCESS:
      return ({
        products: action.payload.data,
        error: false,
        page: action.payload.page,
        totalPage: action.payload.totalpage,
        totalProduct: action.payload.totalproduct
      })

    case LOAD_PRODUCTS_FAILURE:
      return ({
        products: [],
          error: true,
          page: 0,
          totalPage: 0,
          totalProduct: 0
      })

    default:
      return state
  }
}

export default manProduct
