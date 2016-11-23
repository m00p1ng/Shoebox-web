import {
  LOAD_CUSTOMERS_REQUEST,
  LOAD_CUSTOMERS_SUCCESS,
  LOAD_CUSTOMERS_FAILURE,
} from 'actionTypes'

const initialState = {
  customers: [],
  error: false,
  isLoading: false
}

const manCustomer = (state = initialState, action) => {
  switch(action.type) {
    case LOAD_CUSTOMERS_REQUEST:
      return ({
        customers: [],
        error: false,
        isLoading: true
      })

    case LOAD_CUSTOMERS_SUCCESS:
      return ({
        customers: action.payload,
        error: false,
        isLoading: false
      })
    case LOAD_CUSTOMERS_FAILURE:
      return ({
        customers: [],
        error: true,
        isLoading: false
      })

    default:
      return state
  }
}

export default manCustomer
