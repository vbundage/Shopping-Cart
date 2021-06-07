import React, { useState, useEffect } from "react";
import data from "../lib/data";
import Cart from "./Cart";
import Products from "./Products";
import Form from "./Form";

const App = () => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [showAddForm, setShowAddForm] = useState(false);

  useEffect(() => {
    setProducts(data);
  }, []);

  const handleCancelClick = () => {
    setShowAddForm(!showAddForm);
  };

  return (
    <div id="app">
      <header>
        <h1>The Shop!</h1>
        <Cart items={cartItems} />
      </header>

      <main>
        <Products products={products} />

        {showAddForm ? (
          <Form formType="add" handleCancelClick={handleCancelClick} />
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
