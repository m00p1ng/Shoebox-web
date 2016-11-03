import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,

  LOGOUT_SUCCESS,
  LOGOUT_FAILURE
} from 'actionTypes'

const initialState = {
  isLoggedIn: false,
  errorMsg: ''
}

const user = (state = initialState, action) => {
  switch(action.type) {
    case LOGIN_SUCCESS:
      return ({
        errorMsg: '',
        isLoggedIn: true
      })
    case LOGIN_FAILURE:
      return ({
        errorMsg: action.payload.response.errorMsg,
        isLoggedIn: false
      })
    case LOGOUT_SUCCESS:
      return ({
        errorMsg: '',
        isLoggedIn: false
      })
    default:
      return state
  }
}

export default user
