import { CALL_API } from 'redux-api-middleware'
import {
  URL_ROOT,
  ORDER_ENDPOINT
} from 'endpoint'
import { browserHistory } from 'react-router'
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

const formatOrder = (cart, total) => {
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
    cart: order,
    total
  })
}

export const checkout = (cart, total) => ({
  [CALL_API]: {
    endpoint: `${ORDER_ENDPOINT}`,
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formatOrder(cart, total)),
    types: [
      SEND_ORDER_REQUEST,
      {
        type: SEND_ORDER_SUCCESS,
        payload: (action, state, res) => {
          return res.json().then(() => {
            browserHistory.push(`${URL_ROOT}/cart/checkout/success`)
          })
        }
      },
      SEND_ORDER_FAILURE
    ]
  }
})
