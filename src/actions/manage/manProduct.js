import { CALL_API } from 'redux-api-middleware'
import { PRODUCT_ENDPOINT } from 'endpoint'

import {
  LOAD_PRODUCTS_REQUEST,
  LOAD_PRODUCTS_SUCCESS,
  LOAD_PRODUCTS_FAILURE,

  CLEAR_PRODUCTS,
} from 'actionTypes'

export const clearProducts = () => (
  (dispatch) => dispatch({
    type: CLEAR_PRODUCTS
  })
)

export const loadProducts = (slug) => ({
  [CALL_API]: {
    endpoint: `${PRODUCT_ENDPOINT}`,
    method: 'GET',
    types: [
      LOAD_PRODUCTS_REQUEST,
      LOAD_PRODUCTS_SUCCESS,
      LOAD_PRODUCTS_FAILURE
    ]
  }
})
