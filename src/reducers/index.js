import { combineReducers } from 'redux'
import products from './product'
import cart from './cart'
import user from './user'

const rootReducer = combineReducers({
  products,
  cart,
  user
});

export default rootReducer;
