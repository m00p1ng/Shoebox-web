import { CALL_API } from 'redux-api-middleware'
import {
  LOGIN_ENDPOINT,
  LOGOUT_ENDPOINT
} from 'endpoint'

import {
  LOGIN_REQUEST
  LOGIN_SUCCESS
  LOGIN_FAILURE

  LOGOUT_REQUEST
  LOGOUT_SUCCESS
  LOGOUT_FAILURE
} from 'actionTypes'

export const login = () =>({
  [CALL_API]: {
    endpoint: LOGIN_ENDPOINT,
    method: 'POST',
    types: [LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE]
  }
})

export const logout = () => ({
  [CALL_API]: {
    endpoint: LOGOUT_ENDPOINT,
    method: 'POST',
    types: [LOGOUT_REQUEST, LOGOUT_SUCCESS, LOGOUT_FAILURE]
  }
})
