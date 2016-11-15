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

const formatOrder = (cart) => {
  const prodIDs = cart.addedIds
  let order = []
  prodIDs.map((prodID) => {
    let detail = {}
    detail['product'] = prodID
    detail['qty'] = cart.quantityById[prodID]
    detail['price'] = (cart.subtotalById[prodID]/cart.quantityById[prodID])
    detail['subtotal'] = cart.subtotalById[prodID]
    order.push(detail)
  })
  return order
}

export const checkout = (cart) => ({
  [CALL_API]: {
    endpoint: `${ORDER_ENDPOINT}`,
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formatOrder(cart)),
    types: [
      SEND_ORDER_REQUEST,
      SEND_ORDER_SUCCESS,
      SEND_ORDER_FAILURE
    ]
  }
})
