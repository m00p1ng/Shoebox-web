import {
  ADD_TO_CART
} from 'actionTypes'

const initialState = []

const cart = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return [ ...state, action.productId ]
    default:
      return state
  }
}

export const getAddedIds = state => state.addedIds

export default cart
