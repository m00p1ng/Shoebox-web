import {
  LOAD_ORDERS_REQUEST,
  LOAD_ORDERS_SUCCESS,
  LOAD_ORDERS_FAILURE,
} from 'actionTypes'

const initialState = {
  orders: [],
  error: false,
  page: 1,
  totalPage: 0,
  totalOrder: 0
}

const manOrder = (state = initialState, action) => {
  switch(action.type) {
    case LOAD_ORDERS_REQUEST:
      return initialState

    case LOAD_ORDERS_SUCCESS:
      return ({
        orders: action.payload.data,
        error: false,
        page: action.payload.page,
        totalPage: action.payload.totalpage,
        totalOrder: action.payload.totalorder
      })
    case LOAD_ORDERS_FAILURE:
      return ({
        orders: [],
        error: true,
        page: 0,
        totalPage: 0,
        totalOrder: 0
      })

    default:
      return state
  }
}

export default manOrder
