import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,

  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,

  GET_USERNAME_REQUEST,
  GET_USERNAME_SUCCESS,
} from 'actionTypes'

const initialState = {
  username: '',
  isLoggedIn: false,
  errorMsg: '',
  role: 'guest'
}

const user = (state = initialState, action) => {
  switch(action.type) {
    case LOGIN_SUCCESS:
      return ({
        username: action.payload.username,
        role: action.payload.role,
        errorMsg: '',
        isLoggedIn: true
      })
    case LOGIN_FAILURE:
      return ({
        username: '',
        role: 'guest',
        errorMsg: action.payload.response.errorMsg,
        isLoggedIn: false
      })
    case LOGOUT_SUCCESS:
      return ({
        username: '',
        role: 'guest',
        errorMsg: '',
        isLoggedIn: false
      })

    case GET_USERNAME_SUCCESS:
      return ({
        username: action.payload.username,
        role: action.payload.role,
        errorMsg: '',
        isLoggedIn: true
      })
    default:
      return state
  }
}

export default user
