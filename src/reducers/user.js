import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,

  LOGOUT_SUCCESS,
  LOGOUT_FAILURE
} from 'actionTypes'

const initialState = {
  username: '',
  isLoggedIn: false,
  errorMsg: ''
}

const user = (state = initialState, action) => {
  switch(action.type) {
    case LOGIN_SUCCESS:
      return ({
        username: '',
        errorMsg: '',
        isLoggedIn: true
      })
    case LOGIN_FAILURE:
      return ({
        username: '',
        errorMsg: action.payload.response.errorMsg,
        isLoggedIn: false
      })
    case LOGOUT_SUCCESS:
      return ({
        username: '',
        errorMsg: '',
        isLoggedIn: false
      })
    default:
      return state
  }
}

export default user
