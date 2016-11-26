import {
  LOAD_SUPPLIERS_REQUEST,
  LOAD_SUPPLIERS_SUCCESS,
  LOAD_SUPPLIERS_FAILURE,
} from 'actionTypes'

const initialState = {
  suppliers: [],
  error: false,
  page: 1,
  totalPage: 0,
  totalSupplier: 0
}

const manSupplier = (state = initialState, action) => {
  switch(action.type) {
    case LOAD_SUPPLIERS_REQUEST:
      return initialState

    case LOAD_SUPPLIERS_SUCCESS:
      return ({
        suppliers: action.payload.data,
        error: false,
        page: action.payload.page,
        totalPage: action.payload.totalpage,
        totalSupplier: action.payload.totalsupplier
      })

    case LOAD_SUPPLIERS_FAILURE:
      return ({
        suppliers: [],
        error: true,
        page: 0,
        totalPage: 0,
        totalSupplier: 0
      })

    default:
      return state
  }
}

export default manSupplier
