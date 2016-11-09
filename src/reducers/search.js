import {
  SEARCH_PRODUCT_SUCCESS,
  SEARCH_PRODUCT_FAILURE,
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

    default:
      return state
  }
}

export default search
