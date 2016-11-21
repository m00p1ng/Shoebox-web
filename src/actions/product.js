import { CALL_API } from 'redux-api-middleware'
import { PRODUCT_ENDPOINT } from 'endpoint'

import {
  LOAD_PRODUCT_REQUEST,
  LOAD_PRODUCT_SUCCESS,
  LOAD_PRODUCT_FAILURE,

  UPDATE_PRODUCT_VIEWS_REQUEST,
  UPDATE_PRODUCT_VIEWS_SUCCESS,
  UPDATE_PRODUCT_VIEWS_FAILURE,

  CLEAR_PRODUCT,
  ADD_TO_CART,
} from 'actionTypes'

export const clearProduct = () => (
  (dispatch) => dispatch({
    type: CLEAR_PRODUCT
  })
)

export const loadProduct = (slug) => ({
  [CALL_API]: {
    endpoint: `${PRODUCT_ENDPOINT}/name/${slug}`,
    method: 'GET',
    types: [
      LOAD_PRODUCT_REQUEST,
      LOAD_PRODUCT_SUCCESS,
      LOAD_PRODUCT_FAILURE
    ]
  }
})

export const updateViews = (slug) => ({
  [CALL_API]: {
    endpoint: `${PRODUCT_ENDPOINT}/name/${slug}`,
    method: 'PUT',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: '{"number_of_views": 1}',
    types: [
      UPDATE_PRODUCT_VIEWS_REQUEST,
      UPDATE_PRODUCT_VIEWS_SUCCESS,
      UPDATE_PRODUCT_VIEWS_FAILURE
    ]
  }
})

const addToCart = (productId, productDetail, price) => ({
  type: ADD_TO_CART,
  productId,
  productDetail,
  price
})

export const clickAddToCart = (productId, productDetail, price) => (
  dispatch => dispatch(addToCart(productId, productDetail, price))
)
