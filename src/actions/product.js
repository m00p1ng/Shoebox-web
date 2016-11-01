import { CALL_API } from 'redux-api-middleware'
import { PRODUCT_ENDPOINT } from 'endpoint'

import {
  LOAD_PRODUCTS_REQUEST,
  LOAD_PRODUCTS_SUCCESS,
  LOAD_PRODUCTS_FAILURE,

  LOAD_PRODUCT_REQUEST,
  LOAD_PRODUCT_SUCCESS,
  LOAD_PRODUCT_FAILURE,

  ADD_TO_CART
} from 'actionTypes'

export const loadProducts = () => ({
  [CALL_API]: {
    endpoint: `${PRODUCT_ENDPOINT}/latest`,
    method: 'GET',
    types: [LOAD_PRODUCTS_REQUEST, LOAD_PRODUCTS_SUCCESS, LOAD_PRODUCTS_FAILURE]
  }
})

export const loadProduct = (slug) => ({
  [CALL_API]: {
    endpoint: `${PRODUCT_ENDPOINT}/name/${slug}`,
    method: 'GET',
    types: [LOAD_PRODUCT_REQUEST, LOAD_PRODUCT_SUCCESS, LOAD_PRODUCT_FAILURE]
  }
})

const addToCart = (productId) => ({
  type: ADD_TO_CART,
  productId
})

export const clickAddToCart = productId => (
  dispatch => dispatch(addToCart(productId))
)
