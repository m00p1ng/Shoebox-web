import { CALL_API } from 'redux-api-middleware'
import {
  LOGIN_ENDPOINT,
  LOGOUT_ENDPOINT,
  USER_ENDPOINT
} from 'endpoint'

import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,

  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,

  GET_USERNAME_REQUEST,
  GET_USERNAME_SUCCESS,
  GET_USERNAME_FAILURE,

  GET_CUSTOMER_DETAIL_REQUEST,
  GET_CUSTOMER_DETAIL_SUCCESS,
  GET_CUSTOMER_DETAIL_FAILURE,

  GET_EMPLOYEE_DETAIL_REQUEST,
  GET_EMPLOYEE_DETAIL_SUCCESS,
  GET_EMPLOYEE_DETAIL_FAILURE,
} from 'actionTypes'

export const onLogin = (values) =>({
  [CALL_API]: {
    endpoint: LOGIN_ENDPOINT,
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(values),
    types: [
      LOGIN_REQUEST,
      LOGIN_SUCCESS,
      LOGIN_FAILURE
    ]
  }
})

export const onLogout = () => ({
  [CALL_API]: {
    endpoint: LOGOUT_ENDPOINT,
    method: 'GET',
    types: [
      LOGOUT_REQUEST,
      LOGOUT_SUCCESS,
      LOGOUT_FAILURE
    ]
  }
})

export const resetErrorMsg = () =>
  (dispatch) => dispatch({
      type: LOGOUT_SUCCESS
  })

export const getUsername = () => ({
  [CALL_API]: {
    endpoint: LOGIN_ENDPOINT,
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: '{}',
    types: [
      GET_USERNAME_REQUEST,
      GET_USERNAME_SUCCESS,
      GET_USERNAME_FAILURE
    ]
  }
})

export const getCustomerDetail = (username) => ({
  [CALL_API]: {
    endpoint: `${USER_ENDPOINT}/customer/${username}`,
    method: 'GET',
    types: [
      GET_CUSTOMER_DETAIL_REQUEST,
      GET_CUSTOMER_DETAIL_SUCCESS,
      GET_CUSTOMER_DETAIL_FAILURE
    ]
  }
})

export const getEmployeeDetail = (username) => ({
  [CALL_API]: {
    endpoint: `${USER_ENDPOINT}/employee/${username}`,
    method: 'GET',
    types: [
      GET_EMPLOYEE_DETAIL_REQUEST,
      GET_EMPLOYEE_DETAIL_SUCCESS,
      GET_EMPLOYEE_DETAIL_FAILURE
    ]
  }
})
