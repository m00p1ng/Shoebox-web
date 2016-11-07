import { CALL_API } from 'redux-api-middleware'
import { PRODUCT_ENDPOINT } from 'endpoint'

import {
  CLEAR_ERROR,
  CLEAR_DETAIL,

  LOAD_PRODUCTS_REQUEST,
  LOAD_PRODUCTS_SUCCESS,
  LOAD_PRODUCTS_FAILURE,

  LOAD_PRODUCT_REQUEST,
  LOAD_PRODUCT_SUCCESS,
  LOAD_PRODUCT_FAILURE,

  UPDATE_PRODUCT_VIEWS_REQUEST,
  UPDATE_PRODUCT_VIEWS_SUCCESS,
  UPDATE_PRODUCT_VIEWS_FAILURE,

  ADD_TO_CART
} from 'actionTypes'

export const loadProducts = () => ({
  [CALL_API]: {
    endpoint: `${PRODUCT_ENDPOINT}/latest`,
    method: 'GET',
    types: [
      LOAD_PRODUCTS_REQUEST,
      LOAD_PRODUCTS_SUCCESS,
      LOAD_PRODUCTS_FAILURE
    ]
  }
})

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

export const clearError = () =>
  (dispatch) => dispatch({
    type: CLEAR_ERROR
  })

export const clearDetail = () =>
  (dispatch) => dispatch({
    type: CLEAR_DETAIL
  })

const addToCart = (productId, productDetail) => ({
  type: ADD_TO_CART,
  productId,
  productDetail
})

export const clickAddToCart = (productId, productDetail) => (
  dispatch => dispatch(addToCart(productId, productDetail))
)
