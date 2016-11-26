import {
  LOAD_ORDERS_REQUEST,
  LOAD_ORDERS_SUCCESS,
  LOAD_ORDERS_FAILURE,
} from 'actionTypes'

const initialState = {
  orders: [],
  error: false,
  isLoading: false
}

const manOrder = (state = initialState, action) => {
  switch(action.type) {
    case LOAD_ORDERS_REQUEST:
      return ({
        orders: [],
        error: false,
        isLoading: true
      })

    case LOAD_ORDERS_SUCCESS:
      return ({
        orders: action.payload,
        error: false,
        isLoading: false
      })
    case LOAD_ORDERS_FAILURE:
      return ({
        orders: [],
        error: true,
        isLoading: false
      })

    default:
      return state
  }
}

export default manOrder
