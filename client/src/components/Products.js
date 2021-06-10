import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import Product from "./Product";
import Form from "./Form";
import {
  productsReceivedSuccess,
  addProductSuccess,
  editProductSuccess,
} from "../actions/productAction";

const Products = ({ handleAddToCart = (_) => null }) => {
  const [addFormHidden, setAddFormHidden] = useState(true);

  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  useEffect(() => {
    console.log("here");
    axios
      .get("/api/products")
      .then((res) => res.data)
      .then((data) => dispatch(productsReceivedSuccess(data)))
      .catch((err) => console.log(err));
  }, [dispatch]);

  const handleAddProduct = (body) => {
    axios
      .post("/api/products", body)
      .then((res) => res.data)
      .then((data) => dispatch(addProductSuccess(data)))
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

  const toggleForm = () => {
    setAddFormHidden(!addFormHidden);
  };

  return (
    <>
      <div className="product-listing">
        <h2>Products</h2>
        {products.map((product) => {
          return (
            <Product
              key={"product" + product._id}
              product={product}
              handleEdit={handleEdit}
              handleAddToCart={handleAddToCart}
            />
          );
        })}
      </div>
      {addFormHidden ? (
        <p>
          <button className="button add-product-button" onClick={toggleForm}>
            Add A Product
          </button>
        </p>
      ) : (
        <Form
          type="add"
          title="Add Product"
          submitHandler={handleAddProduct}
          handleCancelClick={toggleForm}
        />
      )}
    </>
  );
};

export default Products;
