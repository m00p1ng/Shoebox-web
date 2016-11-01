import {
  LOAD_CART_SUCCESS,
  LOAD_CART_FAILURE,
  LOAD_CART_REQUEST
} from 'actionTypes'

const receiveCart = (cart) => ({
  type: LOAD_CART_SUCCESS,
  cart
})

export const getCartProduct = () => (dispatch, getState) => {
    dispatch(receiveCart(getState().cart))
}
