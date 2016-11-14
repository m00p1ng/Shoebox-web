import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import products from './product'
import search from './search'
import cart from './cart'
import user from './user'
import register from './register'
import { REGISTER_CUSTOMER_SUCCESS } from 'actionTypes'

const rootReducer = combineReducers({
  form: formReducer.plugin({
    register: (state, action) => {
      switch(action.type) {
        case REGISTER_CUSTOMER_SUCCESS:
          return undefined;
        default:
          return state;
      }
    }
  }),
  products,
  search,
  cart,
  user,
  register
});

export default rootReducer;
