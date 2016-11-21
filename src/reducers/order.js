import {
  LOAD_ORDER_REQUEST,
  LOAD_ORDER_SUCCESS,
  LOAD_ORDER_FAILURE,
} from 'actionTypes'

const initialState = {
  order: [],
  isLoading: false,
  error: false
}

const order = (state = initialState, action) => {
  switch(action.type) {
    case LOAD_ORDER_REQUEST:
      return ({
        order: [],
        isLoading: true,
        error: false
      })

    case LOAD_ORDER_SUCCESS:
      return ({
        order: action.payload,
        isLoading: false,
        error: false
      })

    case LOAD_ORDER_FAILURE:
      return ({
        order: [],
        isLoading: false,
        error: true
      })

    default:
      return state
  }
}

export default order
