import { CALL_API } from 'redux-api-middleware'
import { ORDER_ENDPOINT } from 'endpoint'

import {
  LOAD_ORDERS_REQUEST,
  LOAD_ORDERS_SUCCESS,
  LOAD_ORDERS_FAILURE,
} from 'actionTypes'

export const loadAllOrders = () => ({
  [CALL_API]: {
    endpoint: `${ORDER_ENDPOINT}`,
    method: 'GET',
    types: [
      LOAD_ORDERS_REQUEST,
      LOAD_ORDERS_SUCCESS,
      LOAD_ORDERS_FAILURE,
    ]
  }
})
