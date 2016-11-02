import {
  LOAD_CART_SUCCESS,
  LOAD_CART_FAILURE,
  LOAD_CART_REQUEST,

  CHECKOUT_REQUEST,
  CHECKOUT_SUCCESS,
  CHECKOUT_FAILURE
} from 'actionTypes'

const receiveCart = (cart) => ({
  type: LOAD_CART_SUCCESS,
  cart: cart.addedIds
})

export const getCartProduct = () => (dispatch, getState) => {
    dispatch(receiveCart(getState().cart))
}

export const getNumberOfCartProduct = () => (dispatch, getState) => {
    dispatch(receiveCart(getState().cart.addedIds.length))
}

export const checkout = products => (dispatch, getState) => {
  const { cart } = getState()

  dispatch({
    type: CHECKOUT_REQUEST
  })
  shop.buyProducts(products, () => {
    dispatch({
      type: CHECKOUT_SUCCESS,
      cart
    })
  })
}
