import { CALL_API } from 'redux-api-middleware'
import {
  REGISTER_CUSTOMER_ENDPOINT
} from 'endpoint'

import {
  REGISTER_CUSTOMER_REQUEST,
  REGISTER_CUSTOMER_SUCCESS,
  REGISTER_CUSTOMER_FAILURE
} from 'actionTypes'

export const sendRegisterForm = (values) =>
  (dispatch) => {
    dispatch(registerCustomer(values))
  }

const registerCustomer = (values) => ({
  [CALL_API]: {
    endpoint: REGISTER_CUSTOMER_ENDPOINT,
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(values),
    types: [
      REGISTER_CUSTOMER_REQUEST,
      REGISTER_CUSTOMER_SUCCESS,
      REGISTER_CUSTOMER_FAILURE
    ]
  }
})