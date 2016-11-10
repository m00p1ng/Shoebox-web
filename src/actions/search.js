import { CALL_API } from 'redux-api-middleware'
import { SEARCH_PRODUCT_ENDPOINT } from 'endpoint'
import {
  SEARCH_PRODUCT_REQUEST,
  SEARCH_PRODUCT_SUCCESS,
  SEARCH_PRODUCT_FAILURE,

  CLEAR_SEARCH
} from 'actionTypes'


export const searchProduct = (keyword) => ({
  [CALL_API]: {
    endpoint: `${SEARCH_PRODUCT_ENDPOINT}/${keyword}`,
    method: 'GET',
    types: [
      {
        type: SEARCH_PRODUCT_REQUEST,
        payload: (action, state) => ({isLoading: true})
      },
      SEARCH_PRODUCT_SUCCESS,
      SEARCH_PRODUCT_FAILURE
    ]
  }
})

export const clearSearch = () =>
  (dispatch) => dispatch({
    type: CLEAR_SEARCH
  })
