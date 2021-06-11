import apiClient from "../lib/ApiClient";

export const productsReceivedSuccess = (products) => {
  return {
    type: "PRODUCTS_RECEIVED",
    payload: { products },
  };
};

export const productsReceived = () => {
  return (dispatch) => {
    apiClient.getProducts((products) => {
      dispatch(productsReceivedSuccess(products));
    });
  };
};

export const addProductSuccess = (product) => {
  return {
    type: "PRODUCT_ADDED",
    payload: product,
  };
};

export const addProduct = (newProduct) => {
  return (dispatch) => {
    apiClient.addProduct(newProduct, () => {
      dispatch(addProductSuccess(newProduct));
    });
  };
};

export const deleteProductSuccess = (id) => {
  return {
    type: "PRODUCT_DELETED",
    payload: id,
  };
};

export const deleteProduct = (id) => {
  return (dispatch) => {
    apiClient.deleteProduct(id, () => {
      dispatch(deleteProductSuccess(id));
    });
  };
};

export const editProductSuccess = (product) => {
  return {
    type: "PRODUCT_EDITED",
    payload: product,
  };
};

export const editProduct = (productId, requestBody) => {
  return (dispatch) => {
    apiClient.editProduct(productId, requestBody, (updatedProduct) => {
      dispatch(editProductSuccess(updatedProduct));
    });
  };
};
