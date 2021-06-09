import React, { useState } from "react";
import Product from "./Product";
import Form from './Form';

const Products = ({
  data,
  handleAdd = (_) => null,
  handleEdit = (_) => null,
  handleDelete = (_) => null,
}) => {
  const [addFormHidden, setAddFormHidden] = useState(true);

  const toggleForm = () => {
    setAddFormHidden(!addFormHidden);
  };

  return (
    <>
      <div className="product-listing">
        <h2>Products</h2>
        {data.map(product => {
            return <Product
              key={"product" + product._id}
              product={product}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
            />
          })}
      </div>
      {addFormHidden
        ? <p>
            <button className="button add-product-button" onClick={toggleForm}>
              Add A Product
            </button>
          </p>
        : <Form
            type="add"
            title="Add Product"
            submitHandler={handleAdd}
            handleCancelClick={toggleForm}
          />}
    </>
  );
};

export default Products;
