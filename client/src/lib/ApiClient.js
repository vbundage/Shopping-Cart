import axios from "axios";

const apiClient = {
  getProducts(callback) {
    return axios
      .get("/api/products")
      .then((res) => res.data)
      .then(callback)
      .catch((err) => console.log(err));
  },

  addProduct(newProduct, callback) {
    return axios
      .post("/api/products", newProduct)
      .then((res) => res.data)
      .then(callback)
      .catch((err) => console.log(err));
  },

  deleteProduct(id, callback) {
    return axios
      .delete(`/api/products/${id}`)
      .then(callback)
      .catch((err) => console.log(err));
  },

  editProduct(productId, requestBody, callback) {
    return axios
      .put(`/api/products/${productId}`, requestBody)
      .then((res) => res.data)
      .then(callback)
      .catch((err) => console.log(err));
  },

  getCart(callback) {
    return axios
      .get("/api/cart")
      .then((res) => res.data)
      .then(callback)
      .catch((err) => console.log(err));
  },

  addToCart(product, callback) {
    return axios
      .post("/api/cart", product)
      .then((res) => res.data)
      .then(callback)
      .catch((err) => console.log(err));
  },
};

export default apiClient;
