import {
  LOAD_ORDER_REQUEST,
  LOAD_ORDER_SUCCESS,
  LOAD_ORDER_FAILURE,
} from 'actionTypes'

const initialState = {
  order: [],
  error: false
}

const order = (state = initialState, action) => {
  switch(action.type) {
    case LOAD_ORDER_REQUEST:
      return ({
        order: [],
        error: false
      })

    case LOAD_ORDER_SUCCESS:
      if(action.meta.status === 200) {
        return ({
          order: action.payload,
          error: false
        })
      }
      else if(action.meta.status === 204) {
        return ({
          order: [],
          error: true
        })
      }

    case LOAD_ORDER_FAILURE:
      return ({
        order: [],
        error: true
      })

    default:
      return state
  }
}

export default order
