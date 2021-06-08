import React from "react";

const Form = ({
  formType,
  title,
  price,
  quantity,
  handleCancelClick,
  handleFormSubmit,
  handleFormUpdate,
}) => {

  return (
    <div className={`${formType}-form`}>
      <h3>{formType === "add" ? "Add" : "Edit"} Product</h3>
      <form>
        <div className="input-group">
          <label for="product-name">Product Name</label>
          <input type="text" id="product-name" value={title} onChange={handleFormUpdate} />
        </div>

        <div className="input-group">
          <label for="product-price">Price</label>
          <input type="text" id="product-price" value={price} onChange={handleFormUpdate} />
        </div>

        <div className="input-group">
          <label for="product-quantity">Quantity</label>
          <input type="text" id="product-quantity" value={quantity} onChange={handleFormUpdate} />
        </div>

        <div className="actions form-actions">
          <a className="button" onClick={handleFormSubmit}>{formType === "add" ? "Add" : "Update"}</a>
          <a className="button" onClick={handleCancelClick}>
            Cancel
          </a>
        </div>
      </form>
    </div>
  );
};

export default Form;
