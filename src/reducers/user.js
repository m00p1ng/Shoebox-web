import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,

  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,

  GET_USERNAME_REQUEST,
  GET_USERNAME_SUCCESS,

  GET_CUSTOMER_DETAIL_SUCCESS,
  GET_EMPLOYEE_DETAIL_SUCCESS
} from 'actionTypes'

const initialState = {
  username: '',
  isLoggedIn: false,
  errorMsg: '',
  role: 'guest',
  detail: {}
}

const user = (state = initialState, action) => {
  switch(action.type) {
    case LOGIN_SUCCESS:
      return ({
        detail: {},
        username: action.payload.username,
        role: action.payload.role,
        errorMsg: '',
        isLoggedIn: true
      })
    case LOGIN_FAILURE:
      return ({
        detail: {},
        username: '',
        role: 'guest',
        errorMsg: action.payload.response.errorMsg,
        isLoggedIn: false
      })
    case LOGOUT_SUCCESS:
      return ({
        detail: {},
        username: '',
        role: 'guest',
        errorMsg: '',
        isLoggedIn: false
      })

    case GET_USERNAME_SUCCESS:
      return ({
        detail: {},
        username: action.payload.username,
        role: action.payload.role,
        errorMsg: '',
        isLoggedIn: true
      })

    case GET_CUSTOMER_DETAIL_SUCCESS:
      return ({
        ...state,
        detail: action.payload
      })

    case GET_EMPLOYEE_DETAIL_SUCCESS:
      return ({
        ...state,
        detail: action.payload
      })
    default:
      return state
  }
}

export default user
