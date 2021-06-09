import React from "react";

const Cart = ({ items }) => {
  const getTotal = () => {
    return items.reduce((acc, item) => acc + item.price);
  };

  if (items.length === 0) {
    return (
      <div className="cart">
        <h2>Your Cart</h2>
        <p>Your cart is empty</p>
        <p>Total: $0</p>
        <button className="button checkout disabled">Checkout</button>
      </div>
    );
  }
  return (
    <div className="cart">
      <table class="cart-items">
        <h2>Your Cart</h2>
        <tr>
          <th>Item</th>
          <th>Quantity</th>
          <th>Price</th>
        </tr>
        {items.map((item) => {
          return (
            <tr>
              <td>{item.title}</td>
              <td>{item.quantity}</td>
              <td>${item.price}</td>
            </tr>
          );
        })}

        {/* TODO: Total calculation */}
        <tr>
          <td colspan="3" class="total">
            Total: ${getTotal()}
          </td>
        </tr>
      </table>
      <button class="button checkout">Checkout</button>
    </div>
  );
};

export default Cart;
