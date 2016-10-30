import {
  ADD_TO_CART,
  CHECKOUT_REQUEST,
  CHECKOUT_FAILURE
} from 'actionTypes'

const initialState = {
  addedSlugs: [],
  quantityBySlug: {}
}
