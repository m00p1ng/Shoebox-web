import { CALL_API } from 'redux-api-middleware'
import { LOGIN_ENDPOINT } from 'endpoint'

import {
  LOGIN_ATTEMPT
  LOGGED_SUCCESS
  LOGGED_FAILURE

  LOGOUT_ATTEMPT
  LOGOUT_SUCCESS
  LOGOUT_FAILURE
} from 'actionTypes'

export const login = () =>({
  [CALL_API]: {
    endpoint: LOGIN_ENDPOINT,
    method: 'POST',
    types: [LOGIN_ATTEMPT, LOGGED_SUCCESS, LOGGED_FAILURE]
  }
})
