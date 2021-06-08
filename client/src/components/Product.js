import React, { useState } from "react";
import axios from "axios";
import Form from "./Form";

const Product = ({ _id, title, quantity, price, handleDelete, products, setProducts }) => {
  const [showForm, setShowForm] = useState(false);
  const [editFormTitle, setEditFormTitle] = useState(title);
  const [editFormPrice, setEditFormPrice] = useState(price);
  const [editFormQty, setEditFormQty] = useState(quantity);

  const handleEditClick = () => {
    setShowForm(!showForm);
  };

  const handleFormSubmit = (ev) => {
    ev.preventDefault();
    let prodBody = {
      title: editFormTitle,
      price: parseFloat(editFormPrice),
      quantity: Number(editFormQty),
    };

    axios.put(`http://localhost:5000/api/products/${_id}`, prodBody)
         .then(res => res.data)
         .then(data => setProducts(products.map(product => {
           if (product._id === _id) {
             return data
           } else {
             return product
           }
         })))
         .catch(err => console.log(err));
      
  };

  const handleFormUpdate = (ev) => {
    switch (ev.target.id) {
      case "product-quantity":
        setEditFormQty(ev.target.value);
        break;
      case "product-price":
        setEditFormPrice(ev.target.value);
        break;
      case "product-name":
        setEditFormTitle(ev.target.value);
        break;
    }

    console.log(ev.target);
    console.log("\nTITLE:", editFormTitle, "\nPRICE:", editFormPrice, "\nQTY:", editFormQty);
  };

  return (
    <div className="product">
      <div className="product-details">
        <h3>{title}</h3>
        <p className="price">${price}</p>
        <p className="quantity">{quantity} left in stock</p>
        {showForm ? (
          ""
        ) : (
          <div className="actions product-actions">
            <a className="button add-to-cart">Add to Cart</a>
            <a className="button edit" onClick={handleEditClick}>
              Edit
            </a>
          </div>
        )}
        <a className="delete-button" onClick={handleDelete} data-id={_id} >
          <span>X</span>
        </a>
      </div>
      {showForm ? (
        <Form
          formType="edit"
          title={editFormTitle}
          quantity={editFormQty}
          price={editFormPrice}
          handleCancelClick={handleEditClick}
          handleFormSubmit={handleFormSubmit}
          handleFormUpdate={handleFormUpdate}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default Product;
