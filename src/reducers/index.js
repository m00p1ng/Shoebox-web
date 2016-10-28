import { combineReducers } from 'redux'
import products from './product'

const rootReducer = combineReducers({
  products: products
});

export default rootReducer;
