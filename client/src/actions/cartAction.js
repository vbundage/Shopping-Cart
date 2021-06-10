export const cartItemsReceivedSuccess = (cartItems) => {
  return {
    type: "CART_ITEMS_RECEIVED",
    payload: {cartItems}
  }
}

export const cartItemAddedSuccess = (item) => {
  return {
    type: "CART_ITEM_ADDED",
    payload: item
  }
}