import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import Form from "./Form";
import {
  deleteProductSuccess,
  editProductSuccess,
} from "../actions/productAction";
import { cartItemAddedSuccess } from "../actions/cartAction";

/**
 * extracting this fragment to a component for readability
 */
const ProductActions = ({
  showForm = (_) => null,
  handleAddToCart = (_) => null,
  productId,
}) => {
  return (
    <div className="actions product-actions">
      <button
        className="button add-to-cart"
        value={productId}
        onClick={handleAddToCart}
      >
        Add to Cart
      </button>
      <button className="button edit" onClick={showForm}>
        Edit
      </button>
    </div>
  );
};

/**
 * the Product component handles PUT updates
 * to re-render only the single component instead
 * of the entire list of products
 */
const Product = ({ product }) => {
  const [formHidden, setFormHidden] = useState(true);

  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  const handleDelete = (ev) => {
    ev.preventDefault();
    let id = ev.currentTarget.dataset.id;
    axios
      .delete(`/api/products/${id}`)
      .then((_) => {
        dispatch(deleteProductSuccess(id));
      })
      .catch((err) => console.log(err));
  };

  const handleAddToCart = (ev) => {
    ev.preventDefault();
    let product = products.find((p) => p._id === ev.target.value);

    let body = {
      productId: product._id,
      title: product.title,
      price: product.price,
    };

    axios
      .post("/api/cart", body)
      .then((res) => res.data)
      .then((data) => dispatch(cartItemAddedSuccess(data)))
      .catch((err) => console.log(err));
  };

  const handleEdit = (product) => {
    let requestBody = {
      title: product.title,
      price: parseFloat(product.price),
      quantity: Number(product.quantity),
    };

    let productId = product._id;

    axios
      .put(`/api/products/${productId}`, requestBody)
      .then((res) => res.data)
      .then((data) => dispatch(editProductSuccess(data)))
      .catch((err) => console.log(err));
  };

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
        {formHidden ? (
          <ProductActions
            productId={product._id}
            showForm={toggleForm}
            handleAddToCart={handleAddToCart}
          />
        ) : (
          ""
        )}
        <button
          className="delete-button"
          onClick={handleDelete}
          data-id={product._id}
        >
          X
        </button>
      </div>
      {formHidden ? (
        ""
      ) : (
        <Form
          type="edit"
          title="Edit Product"
          product={product}
          handleCancelClick={toggleForm}
          submitHandler={handleEdit}
        />
      )}
    </div>
  );
};

export default Product;
