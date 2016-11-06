import { CALL_API } from 'redux-api-middleware'
import {
  LOGIN_ENDPOINT,
  LOGOUT_ENDPOINT
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
  GET_USERNAME_FAILURE
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
      LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE]
  }
})

export const onLogout = () => ({
  [CALL_API]: {
    endpoint: LOGOUT_ENDPOINT,
    method: 'GET',
    types: [LOGOUT_REQUEST, LOGOUT_SUCCESS, LOGOUT_FAILURE]
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
    body: '{"username": "", "password": ""}',
    types: [GET_USERNAME_REQUEST, GET_USERNAME_SUCCESS, GET_USERNAME_FAILURE]
  }
})
