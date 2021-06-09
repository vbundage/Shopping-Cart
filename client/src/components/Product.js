import React, { useState } from "react";
import Form from "./Form";

/**
 * extracting this fragment to a component for readability
 */
const ProductActions = ({ onClick }) => {
  return (
    <div className="actions product-actions">
      <button className="button add-to-cart">Add to Cart</button>
      <button className="button edit" onClick={onClick}>Edit</button>
    </div>
  );
};

/**
 * the Product component handles PUT updates
 * to re-render only the single component instead
 * of the entire list of products
 */
const Product = ({
  product,
  handleDelete = (_) => null,
  handleEdit = (_) => null,
}) => {
  const [formHidden, setFormHidden] = useState(true);

  const toggleForm = (ev) => {
    ev.preventDefault();
    setFormHidden(!formHidden);
  };

  return (
    <div className="product">
      <div className="product-details">
        <h3>{product.title}</h3>
        <p className="price">${product.price}</p>
        <p className="quantity">{product.quantity} left in stock</p>
        {formHidden ? <ProductActions onClick={toggleForm} /> : ""}
        <button className="delete-button" onClick={handleDelete} data-id={product._id} >
          X
        </button>
      </div>
      {formHidden
        ? ""
        : <Form
            type="edit"
            title="Edit Product"
            product={product}
            handleCancelClick={toggleForm}
            submitHandler={handleEdit}
          />}
    </div>
  );
};

export default Product;
