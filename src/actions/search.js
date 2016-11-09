import { CALL_API } from 'redux-api-middleware'
import { SEARCH_PRODUCT_ENDPOINT } from 'endpoint'
import {
  SEARCH_PRODUCT_REQUEST,
  SEARCH_PRODUCT_SUCCESS,
  SEARCH_PRODUCT_FAILURE
} from 'actionTypes'


export const searchProduct = (keyword) => ({
  [CALL_API]: {
    endpoint: `${SEARCH_PRODUCT_ENDPOINT}/${keyword}`,
    method: 'GET',
    types: [
      SEARCH_PRODUCT_REQUEST,
      SEARCH_PRODUCT_SUCCESS,
      SEARCH_PRODUCT_FAILURE
    ]
  }
})
