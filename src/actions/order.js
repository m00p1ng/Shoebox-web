import { CALL_API } from 'redux-api-middleware'
import { ORDER_ENDPOINT } from 'endpoint'
import {
  LOAD_ORDER_REQUEST,
  LOAD_ORDER_SUCCESS,
  LOAD_ORDER_FAILURE,
} from 'actionTypes'

export const loadOrderHistory = (result, page) => ({
  [CALL_API]: {
    endpoint: `${ORDER_ENDPOINT}?result=${result}&page=${page}`,
    method: 'GET',
    types: [
      LOAD_ORDER_REQUEST,
      {
        type: LOAD_ORDER_SUCCESS,
        meta: (action, state, res) => {
          return ({status: res.status})
        },
        payload: (action, state, res) => {
          return res.json()
        }
      },
      LOAD_ORDER_FAILURE
    ]
  }
})
