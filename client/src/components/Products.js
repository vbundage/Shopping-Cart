import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Product from "./Product";
import Form from "./Form";
import { productsReceived, addProduct } from "../actions/productAction";

const Products = () => {
  const [addFormHidden, setAddFormHidden] = useState(true);

  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(productsReceived());
  }, [dispatch]);

  const handleAddProduct = (body) => {
    dispatch(addProduct(body));
  };

  const toggleForm = () => {
    setAddFormHidden(!addFormHidden);
  };

  return (
    <>
      <div className="product-listing">
        <h2>Products</h2>
        {products.map((product) => {
          return <Product key={"product" + product._id} product={product} />;
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
