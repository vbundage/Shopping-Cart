import React, { useState, useEffect } from "react";
import axios from "axios";
import Cart from "./Cart";
import Products from "./Products";

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  // // EVENT HANDLERS
  // const handleEdit = (product) => {
  //   console.log(product);
  //   let requestBody = {
  //     title: product.title,
  //     price: parseFloat(product.price),
  //     quantity: Number(product.quantity),
  //   };

  //   let productId = product._id;

  //   axios
  //     .put(`/api/products/${productId}`, requestBody)
  //     .then((res) => res.data)
  //     .then((data) => {
  //       setProductsData(
  //         productsData.map((prod) => {
  //           if (prod._id === productId) {
  //             return data;
  //           } else {
  //             return prod;
  //           }
  //         })
  //       );
  //     })
  //     .catch((err) => console.log(err));
  // };

  return (
    <div id="app">
      <header>
        <h1>The Shop!</h1>
        <Cart items={cartItems} />
      </header>

      <main>
        <Products
          // data={productsData}
          // handleAdd={handleAddProduct}
          // handleEdit={handleEdit}
          // handleDelete={handleDelete}
          // handleAddToCart={handleAddToCart}
        />
      </main>
    </div>
  );
};

export default App;
