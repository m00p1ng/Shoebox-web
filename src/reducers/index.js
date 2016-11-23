import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import product from './product'
import shop from './shop'
import search from './search'
import cart from './cart'
import user from './user'
import order from './order'
import manProduct from './manage/manProduct'
import manCustomer from './manage/manCustomer'
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
  product,
  shop,
  search,
  cart,
  order,
  user,
  manProduct,
  manCustomer
});

export default rootReducer;
