import {
  LOAD_CUSTOMERS_REQUEST,
  LOAD_CUSTOMERS_SUCCESS,
  LOAD_CUSTOMERS_FAILURE,
} from 'actionTypes'

const initialState = {
  customers: [],
  error: false,
  page: 1,
  totalPage: 0,
  totalOrder: 0
}

const manCustomer = (state = initialState, action) => {
  switch(action.type) {
    case LOAD_CUSTOMERS_REQUEST:
      return initialState

    case LOAD_CUSTOMERS_SUCCESS:
      return ({
        customers: action.payload.data,
        error: false,
        page: action.payload.page,
        totalPage: action.payload.totalpage,
        totalCustomer: action.payload.totalcustomer
      })
    case LOAD_CUSTOMERS_FAILURE:
      return ({
        customers: [],
        error: true,
        page: 0,
        totalPage: 0,
        totalOrder: 0
      })

    default:
      return state
  }
}

export default manCustomer
