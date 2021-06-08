import React from "react";
import Product from "./Product";

const Products = ({ products, handleDelete }) => {
  return (
    <div className="product-listing">
      <h2>Products</h2>
      {products.map((product) => {
        return <Product key={"product" + product._id} {...product} handleDelete={handleDelete} />;
      })}
    </div>
  );
};

export default Products;
