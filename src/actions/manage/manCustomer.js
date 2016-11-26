import { CALL_API } from 'redux-api-middleware'
import { USER_ENDPOINT } from 'endpoint'

import {
  LOAD_CUSTOMERS_REQUEST,
  LOAD_CUSTOMERS_SUCCESS,
  LOAD_CUSTOMERS_FAILURE,
} from 'actionTypes'

export const loadCustomers = () => ({
  [CALL_API]: {
    endpoint: `${USER_ENDPOINT}/customer`,
    method: 'GET',
    types: [
      LOAD_CUSTOMERS_REQUEST,
      LOAD_CUSTOMERS_SUCCESS,
      LOAD_CUSTOMERS_FAILURE
    ]
  }
})
