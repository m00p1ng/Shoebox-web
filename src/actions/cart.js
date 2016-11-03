import {
  LOAD_CART_ITEM_REQUEST,
  LOAD_CART_ITEM_SUCCESS,
  LOAD_CART_ITEM_FAILURE,

  CHECKOUT_REQUEST,
  CHECKOUT_SUCCESS,
  CHECKOUT_FAILURE
} from 'actionTypes'

const receiveCart = (cart) => ({
  type: LOAD_CART_ITEM_SUCCESS,
  cart: {
    addedIds: cart.addedIds
  }
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
