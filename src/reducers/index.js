import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import products from './product'
import cart from './cart'
import user from './user'

const rootReducer = combineReducers({
  form: formReducer,
  products,
  cart,
  user
});

export default rootReducer;
