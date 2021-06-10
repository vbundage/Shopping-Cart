export const productsReceivedSuccess = (products) => {
  return {
    type: "PRODUCTS_RECEIVED",
    payload: {products}
  }
}

export const addProductSuccess = (product) => {
  return {
    type: "PRODUCT_ADDED",
    payload: product
  }
}

export const deleteProductSuccess = (id) => {
  return {
    type: "PRODUCT_DELETED",
    payload: id
  }
}

export const editProductSuccess = (product) => {
  return {
    type: "PRODUCT_EDITED",
    payload: product
  }
}