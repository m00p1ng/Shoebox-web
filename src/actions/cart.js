import {
  ADD_TO_CART
} from 'actionTypes'

export const addToCart = productId => (
    type: ADD_TO_CART,
    productId
)
