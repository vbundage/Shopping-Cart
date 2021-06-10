export const cartItems = (state=[], action) => {
  switch(action.type) {
    case "CART_ITEMS_RECEIVED": {
      return [...action.payload.cartItems]
    }
    case "CART_ITEM_ADDED": {
      const existingItem = state.find(
        (item) => item.productId === action.payload.productId
      );

      if (existingItem) {
        const tempCartItems = [...state].map((item) => {
          if (item.productId === action.payload.productId) return action.payload;
          return item;
        });
        return tempCartItems;
      } else {
        return state.concat(action.payload);
      }
    }
    default:
      return state
  }
}