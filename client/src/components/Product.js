import React, { useState } from "react";
import Form from "./Form";

const Product = ({ _id, title, quantity, price, handleDelete }) => {
  const [showForm, setShowForm] = useState(false);

  const handleEditClick = () => {
    setShowForm(!showForm);
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
          title={title}
          quantity={quantity}
          price={price}
          handleCancelClick={handleEditClick}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default Product;
