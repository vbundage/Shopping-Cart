import React, { useState, useEffect } from "react";
import axios from 'axios';
// import data from "../lib/data";
import Cart from "./Cart";
import Products from "./Products";
import Form from "./Form";

const App = () => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [addFormTitle, setAddFormTitle] = useState("");
  const [addFormPrice, setAddFormPrice] = useState("");
  const [addFormQty, setAddFormQty] = useState("");

  useEffect(() => {
    axios.get("http://localhost:5000/api/products")
         .then(res => res.data)
         .then(data => setProducts(data))
         .catch(err => console.log(err))
  }, []);

  const handleCancelClick = () => {
    setShowAddForm(!showAddForm);
  };

  const handleFormSubmit = (ev) => {
    ev.preventDefault();
    let prodBody = {
      title: addFormTitle,
      price: parseFloat(addFormPrice),
      quantity: Number(addFormQty),
    };

    axios.post("http://localhost:5000/api/products", prodBody)
         .then(res => res.data)
         .then(data => setProducts(products.concat(data)))
         .catch(err => console.log(err));
      
    setAddFormTitle("");
    setAddFormPrice("");
    setAddFormQty("");
  };

  const handleDelete = (ev) => {
    ev.preventDefault();
    // console.log(ev.currentTarget);
    // console.log(ev.currentTarget.dataset.id);
    let id = ev.currentTarget.dataset.id;
    let endpoint = `http://localhost:5000/api/products/${id}`
    axios.delete(endpoint)
         .then(_ => {
            setProducts(products.filter(product => product._id !== id));
         })
         .catch(err => console.log(err));
  }; 

  const handleFormUpdate = (ev) => {
    switch (ev.target.id) {
      case "product-quantity":
        setAddFormQty(ev.target.value);
        break;
      case "product-price":
        setAddFormPrice(ev.target.value);
        break;
      case "product-name":
        setAddFormTitle(ev.target.value);
        break;
    }
    // console.log(ev.target);
    // console.log("\nTITLE:", addFormTitle, "\nPRICE:", addFormPrice, "\nQTY:", addFormQty);
  };

  return (
    <div id="app">
      <header>
        <h1>The Shop!</h1>
        <Cart items={cartItems} />
      </header>

      <main>
        <Products products={products} handleDelete={handleDelete} setProducts={setProducts} />

        {showAddForm ? (
          <Form formType="add"
            title={addFormTitle}
            price={addFormPrice}
            quantity={addFormQty}
            handleCancelClick={handleCancelClick}
            handleFormUpdate={handleFormUpdate}
            handleFormSubmit={handleFormSubmit}
            />
        ) : (
          <p>
            <a
              className="button add-product-button"
              onClick={handleCancelClick}
            >
              Add A Product
            </a>
          </p>
        )}
      </main>
    </div>
  );
};

export default App;
