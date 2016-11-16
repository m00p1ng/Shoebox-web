import { CALL_API } from 'redux-api-middleware'
import { ORDER_ENDPOINT } from 'endpoint'
import {
  LOAD_CART_ITEM_REQUEST,
  LOAD_CART_ITEM_SUCCESS,
  LOAD_CART_ITEM_FAILURE,

  CHECKOUT_REQUEST,
  CHECKOUT_SUCCESS,
  CHECKOUT_FAILURE,

  SEND_ORDER_REQUEST,
  SEND_ORDER_SUCCESS,
  SEND_ORDER_FAILURE,
} from 'actionTypes'

const receiveCart = (cart) => ({
  type: LOAD_CART_ITEM_SUCCESS,
  cart: {
    addedIds: cart.addedIds
  }
})

const formatOrder = (username, cart, total) => {
  const prodIDs = cart.addedIds
  let order = []
  prodIDs.map((prodID) => {
    let detail = {
      product: prodID,
      qty: cart.quantityById[prodID],
      price: (cart.subtotalById[prodID]/cart.quantityById[prodID]),
      subtotal: cart.subtotalById[prodID]
    }
    order.push(detail)
  })

  return ({
    username,
    cart: order,
    total
  })
}

export const checkout = (username, cart, total) => ({
  [CALL_API]: {
    endpoint: `${ORDER_ENDPOINT}`,
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formatOrder(username, cart, total)),
    types: [
      SEND_ORDER_REQUEST,
      SEND_ORDER_SUCCESS,
      SEND_ORDER_FAILURE
    ]
  }
})
