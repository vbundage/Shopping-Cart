import React, { useState, useEffect } from "react";
import axios from 'axios';
import Cart from "./Cart";
import Products from "./Products";

const App = () => {
  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/products")
         .then(res => res.data)
         .then(data => setProductsData(data))
         .catch(err => console.log(err))
  }, []);

  // EVENT HANDLERS
  // for delete, not handled by form so need to prevent href default
  const handleDelete = (ev) => {
    ev.preventDefault();
    let id = ev.currentTarget.dataset.id;
    axios.delete(`/api/products/${id}`)
         .then(_ => {
            setProductsData(
              productsData
                .filter(product => product._id !== id)
            );
         })
         .catch(err => console.log(err));
  };

  const handleEdit = (product) => {
    console.log(product);
    let requestBody = {
      title: product.title,
      price: parseFloat(product.price),
      quantity: Number(product.quantity),
    };

    let productId = product._id;

    axios.put(`/api/products/${productId}`, requestBody)
         .then(res => res.data)
         .then(data => {
            setProductsData(
              productsData.map(prod => {
                if (prod._id === productId) {
                  return data;
                } else {
                  return prod;
                }
              })
            );
         })
         .catch(err => console.log(err));
  };

  const handleAdd = (body) => {
    axios.post("/api/products", body)
      .then(res => res.data)
      .then(data => setProductsData(productsData.concat(data)))
      .catch(err => console.log(err));
  };

  return (
    <div id="app">
      <header>
        <h1>The Shop!</h1>
        <Cart items={[]} />
      </header>

      <main>
        <Products
          data={productsData}
          handleAdd={handleAdd}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      </main>
    </div>
  );
};

export default App;
