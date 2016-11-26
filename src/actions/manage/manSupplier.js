import { CALL_API } from 'redux-api-middleware'
import { SUPPLIER_ENDPOINT } from 'endpoint'

import {
  LOAD_SUPPLIERS_REQUEST,
  LOAD_SUPPLIERS_SUCCESS,
  LOAD_SUPPLIERS_FAILURE,
} from 'actionTypes'

export const loadSuppliers = (result, page) => ({
  [CALL_API]: {
    endpoint: `${SUPPLIER_ENDPOINT}?result=${result}&page=${page}`,
    method: 'GET',
    types: [
      LOAD_SUPPLIERS_REQUEST,
      LOAD_SUPPLIERS_SUCCESS,
      LOAD_SUPPLIERS_FAILURE
    ]
  }
})
