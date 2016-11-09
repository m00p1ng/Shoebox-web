import {
  SEARCH_PRODUCT_SUCCESS,
  SEARCH_PRODUCT_FAILURE,

  CLEAR_SEARCH
} from 'actionTypes'

const initialState = {
  result: [],
  isLoading: false,
  error: false
}

const search = (state = initialState, action) => {
  switch(action.type) {
    case SEARCH_PRODUCT_SUCCESS:
      return ({
        ...state,
        result: action.payload
      })
    case SEARCH_PRODUCT_FAILURE:
      return ({
        ...state,
        result: [],
        error: true
      })

    case CLEAR_SEARCH:
      return ({
        result: [],
        isLoading: false,
        error: false
      })

    default:
      return state
  }
}

export default search
