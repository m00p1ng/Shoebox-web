import { CALL_API } from 'redux-api-middleware'
import { browserHistory } from 'react-router'
import {
  USER_ENDPOINT,
  URL_ROOT
} from 'endpoint'
import {
  onLogin,
  getCustomerDetail
} from './user'
import {
  REGISTER_CUSTOMER_REQUEST,
  REGISTER_CUSTOMER_SUCCESS,
  REGISTER_CUSTOMER_FAILURE
} from 'actionTypes'

export const sendRegisterCustomerForm = (values) =>
  (dispatch) => {
    dispatch(registerCustomer(values))
  }

const registerCustomer = (values) => (
  (dispatch) => dispatch({
    [CALL_API]: {
      endpoint: `${USER_ENDPOINT}/customer`,
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(values),
      types: [
        REGISTER_CUSTOMER_REQUEST,
        {
          type: REGISTER_CUSTOMER_SUCCESS,
          payload: (action, state, res) => {
            return res.json().then(() => {
              dispatch(onLogin({
               username: values.username,
               password: values.password
             }))
           })
            .then(() => {
               dispatch(getCustomerDetail(values.username))
            })
           .then(() =>
              browserHistory.push(`${URL_ROOT}/register/success`)
            )
          }
        },
        REGISTER_CUSTOMER_FAILURE
      ]
    }
  })
)
