import apiClient from "../lib/ApiClient";

export const cartItemsReceivedSuccess = (cartItems) => {
  return {
    type: "CART_ITEMS_RECEIVED",
    payload: { cartItems },
  };
};

export const cartItemsReceived = () => {
  return (dispatch) => {
    apiClient.getCart((cartItems) => {
      dispatch(cartItemsReceivedSuccess(cartItems));
    });
  };
};

export const cartItemAddedSuccess = (item) => {
  return {
    type: "CART_ITEM_ADDED",
    payload: item,
  };
};

export const cartItemAdded = (item) => {
  return (dispatch) => {
    apiClient.addToCart(item, (cartItem) => {
      dispatch(cartItemAddedSuccess(cartItem));
    });
  };
};
