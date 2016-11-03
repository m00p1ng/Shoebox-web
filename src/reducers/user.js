import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,

  LOGOUT_SUCCESS,
  LOGOUT_FAILURE
} from 'actionTypes'

const initialState = {
  isLoggedIn: false
}

const user = (state = initialState, action) => {
  switch(action.type) {
    case LOGIN_SUCCESS:
      return ({
        isLoggedIn: true
      })
    case LOGIN_FAILURE:
      return ({
        isLoggedIn: false
      })
    case LOGOUT_SUCCESS:
      return ({
        isLoggedIn: false
      })
    default:
      return state
  }
}

export default user
