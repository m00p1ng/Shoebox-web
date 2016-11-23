import { CALL_API } from 'redux-api-middleware'
import { PRODUCT_ENDPOINT } from 'endpoint'

import {
  LOAD_PRODUCTS_REQUEST,
  LOAD_PRODUCTS_SUCCESS,
  LOAD_PRODUCTS_FAILURE,
} from 'actionTypes'

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
