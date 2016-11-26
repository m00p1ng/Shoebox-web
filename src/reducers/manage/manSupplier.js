import {
  LOAD_SUPPLIERS_REQUEST,
  LOAD_SUPPLIERS_SUCCESS,
  LOAD_SUPPLIERS_FAILURE,
} from 'actionTypes'

const initialState = {
  suppliers: [],
  error: false,
  isLoading: false
}

const manSupplier = (state = initialState, action) => {
  switch(action.type) {
    case LOAD_SUPPLIERS_REQUEST:
      return ({
        suppliers: [],
        error: false,
        isLoading: true
      })

    case LOAD_SUPPLIERS_SUCCESS:
      return ({
        suppliers: action.payload,
        error: false,
        isLoading: false
      })
    case LOAD_SUPPLIERS_FAILURE:
      return ({
        suppliers: [],
        error: true,
        isLoading: false
      })

    default:
      return state
  }
}

export default manSupplier
