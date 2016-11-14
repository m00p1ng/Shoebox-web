import {
  REGISTER_CUSTOMER_SUCCESS,
  REGISTER_CUSTOMER_FAILURE
} from 'actionTypes'

const initialState = {
  created: false
}

const search = (state = initialState, action) => {
  switch(action.type) {
    case REGISTER_CUSTOMER_SUCCESS:
      return ({
        created: true
      })
    case REGISTER_CUSTOMER_FAILURE:
      return ({
        created: false
      })
    default:
      return state
  }
}

export default search
