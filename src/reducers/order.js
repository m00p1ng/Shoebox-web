import {
  LOAD_ORDER_SUCCESS,
  LOAD_ORDER_FAILURE,
} from 'actionTypes'

const initialState = {
  order: []
}

const order = (state = initialState, action) => {
  switch(action.type) {
    case LOAD_ORDER_SUCCESS:
      return ({
        order: action.payload
      })
    default:
      return state
  }
}

export default order
