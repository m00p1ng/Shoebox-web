import { CALL_API } from 'redux-api-middleware'
import { ORDER_ENDPOINT } from 'endpoint'
import {
  LOAD_ORDER_REQUEST,
  LOAD_ORDER_SUCCESS,
  LOAD_ORDER_FAILURE,
} from 'actionTypes'

export const loadOrderHistory = () => ({
  [CALL_API]: {
    endpoint: ORDER_ENDPOINT,
    method: 'GET',
    types: [
      LOAD_ORDER_REQUEST,
      LOAD_ORDER_SUCCESS,
      // 'LOAD_ORDER_SUCCESS',
      LOAD_ORDER_FAILURE
    ]
  }
})
