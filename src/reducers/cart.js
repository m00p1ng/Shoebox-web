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
  quantityById: {},
  subtotalById: {},
  total: 0
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

const productDetail = (state = initialState.productDetail, action) => {
  switch (action.type) {
    case ADD_TO_CART:
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

const subtotalById = (state = initialState.subtotalById, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const { productId, price } = action
      return { ...state,
        [productId]: (state[productId] || 0) + price
      }
    default:
      return state
  }
}

const getTotal = (state = initialState.total, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return state + action.price
    default:
      return state
  }
}

const cart = (state = initialState, action) => {
  switch (action.type) {
    case CHECKOUT_REQUEST:
      return initialState
    case CHECKOUT_FAILURE:
      return action.cart
    default:
      return {
        ...state,
        productDetail: productDetail(state.productDetail, action),
        addedIds: addedIds(state.addedIds, action),
        quantityById: quantityById(state.quantityById, action),
        subtotalById: subtotalById(state.subtotalById, action),
        total: getTotal(state.total, action)
      }
  }
}

export default cart
