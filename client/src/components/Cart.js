import React from "react";
import CartItem from "./CartItem";

const Cart = ({ items }) => {
  const getTotal = () => {
    return items.reduce((acc, item) => acc + (item.price * item.quantity));
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
      <h2>Your Cart</h2>
      <table className="cart-items">
        <tr>
          <th>Item</th>
          <th>Quantity</th>
          <th>Price</th>
        </tr>
        {items.map((item) => <CartItem {...item} key={`item${item._id}`} />)}
        {/* TODO: Total calculation */}
        <tr>
          <td colspan="3" class="total">
            Total: ${() => getTotal()}
          </td>
        </tr>
      </table>
      <button class="button checkout">Checkout</button>
    </div>
  );
};

export default Cart;
