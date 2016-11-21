import { CALL_API } from 'redux-api-middleware'
import {
  PRODUCT_ENDPOINT
} from 'endpoint'

import {
  LOAD_SHOP_REQUEST,
  LOAD_SHOP_SUCCESS,
  LOAD_SHOP_FAILURE,

  CLEAR_PRODUCTS,
} from 'actionTypes'

export const clearProducts = () => (
  (dispatch) => dispatch({
    type: CLEAR_PRODUCTS
  })
)

export const loadProducts = (type, result, page) => ({
  [CALL_API]: {
    endpoint: `${PRODUCT_ENDPOINT}/${type}?result=${result}&page=${page}`,
    method: 'GET',
    types: [
      LOAD_SHOP_REQUEST,
      LOAD_SHOP_SUCCESS,
      LOAD_SHOP_FAILURE
    ]
  }
})
