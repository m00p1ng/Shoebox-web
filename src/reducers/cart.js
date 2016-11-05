import {
  LOAD_CART_SUCCESS,

  ADD_TO_CART,

  CHECKOUT_REQUEST,
  CHECKOUT_SUCCESS,
  CHECKOUT_FAILURE
} from 'actionTypes'

const initialState = {
  addedIds: [],
  productDetail: [],
  quantityById: {}
}

const productExist = (state, action) => {
  let hasProduct = false
  for(let i = 0; i < state.length; i++){
    if(state[i].slug === action.productDetail.slug){
      hasProduct = true
    }
  }
  return hasProduct
}

const getProductDetail = (productId) => {
}

const productDetail = (state = initialState.productDetail, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      // if (state.indexOf(action.productDetail.slug) !== -1) {
      //   return state
      // }
      if(productExist(state, action) === false) {
        return [ ...state, action.productDetail ]
      }
      else {
        return state
      }
    default:
      return state
  }
}

const addedIds = (state = initialState.addedIds, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      if (state.indexOf(action.productId) !== -1) {
        return state
      }
      return [ ...state, action.productId ]
    default:
      return state
  }
}

const quantityById = (state = initialState.quantityById, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const { productId } = action
      return { ...state,
        [productId]: (state[productId] || 0) + 1
      }
    default:
      return state
  }
}

export const getQuantity = (state, productId) =>
  state.quantityById[productId] || 0

export const getAddedIds = state => state.addedIds

const cart = (state = initialState, action) => {
  switch (action.type) {
    case CHECKOUT_REQUEST:
      return initialState
    case CHECKOUT_FAILURE:
      return action.cart
    default:
      return {
        productDetail: productDetail(state.productDetail, action),
        addedIds: addedIds(state.addedIds, action),
        quantityById: quantityById(state.quantityById, action)
      }
  }
}

export default cart
