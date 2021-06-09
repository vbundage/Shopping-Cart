import React, { useState } from "react";
import Input from './Input';

const Form = ({
  type,
  title = "New Form",
  product = {},
  submitHandler = (_) => null,
  handleCancelClick = (_) => null,
}) => {
  let formClass = type + "-form";
  let submitText = type === "add" ? "Add" : "Update";

  const [productName, setProductName] = useState(product.title || "");
  const [productPrice, setProductPrice] = useState(product.price || "0.00");
  const [productQty, setProductQty] = useState(product.quantity || "0");

  /**
   * Prevent the event's default behavior and pass the
   * formatted request body to the handler
   */
  const handleFormSubmit = (ev) => {
    ev.preventDefault();
    let newProduct = {
      _id: product._id,
      title: productName,
      price: productPrice,
      quantity: productQty,
    }
    submitHandler(newProduct);
  };

  return (
    <div className={formClass}>
      <h3>{title}</h3>
      <form>
      <Input
        title="Product Name"
        value={productName}
        label="product-name"
        setState={setProductName}
      />
      <Input
        title="Price"
        value={productPrice}
        setState={setProductPrice}
      />
      <Input
        title="Quantity"
        value={productQty}
        setState={setProductQty}
      />
      </form>
      <div className="actions form-actions">
        <button className="button" onClick={handleFormSubmit}>{submitText}</button>
        <button className="button" onClick={handleCancelClick}>Cancel</button>
      </div>
    </div>
  );
};

export default Form;
