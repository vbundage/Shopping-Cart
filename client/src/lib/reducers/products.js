export const products = (state=[], action) => {
  switch(action.type) {
    case "PRODUCTS_RECEIVED": {
      return [...action.payload.products]
    }
    case "PRODUCT_ADDED": {
      return state.concat(action.payload)
    }
    case "PRODUCT_DELETED": {
      return state.filter((product) => product._id !== action.payload)
    }
    case "PRODUCT_EDITED": {
      return state.map((prod) => {
        if (prod._id === action.payload._id) {
          return action.payload;
        } else {
          return prod;
        }
      })
    }

    default:
      return state
  }
}