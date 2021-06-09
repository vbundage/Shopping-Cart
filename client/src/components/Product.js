import React, { useState } from "react";
import axios from "axios";
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
