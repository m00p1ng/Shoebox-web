import {
  LOAD_ORDER_REQUEST,
  LOAD_ORDER_SUCCESS,
  LOAD_ORDER_FAILURE,
} from 'actionTypes'

const initialState = {
  order: [],
  error: false,
  page: 1,
  totalPage: 0,
  totalCustomer: 0
}

const order = (state = initialState, action) => {
  switch(action.type) {
    case LOAD_ORDER_REQUEST:
      return initialState

    case LOAD_ORDER_SUCCESS:
      if(action.meta.status === 200) {
        return ({
          order: action.payload.data,
          error: false,
          page: action.payload.page,
          totalPage: action.payload.totalpage,
          totalOrder: action.payload.totalorder
        })
      }
      else if(action.meta.status === 204) {
        return ({
          order: [],
          error: true,
          page: 0,
          totalPage: 0,
          totalOrder: 0
        })
      }

    case LOAD_ORDER_FAILURE:
      return ({
        order: [],
        error: true,
        page: 0,
        totalPage: 0,
        totalOrder: 0
      })

    default:
      return state
  }
}

export default order
