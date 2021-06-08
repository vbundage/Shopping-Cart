import React from "react";
import Product from "./Product";

const Products = ({ products, handleDelete, setProducts }) => {
  return (
    <div className="product-listing">
      <h2>Products</h2>
      {products.map((product) => {
        return <Product key={"product" + product._id} {...product} handleDelete={handleDelete}  products={products} setProducts={setProducts} />;
      })}
    </div>
  );
};

export default Products;
