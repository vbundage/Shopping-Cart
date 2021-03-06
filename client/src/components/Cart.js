import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "./CartItem";
import { cartItemsReceived } from "../actions/cartAction";

const Cart = () => {
  console.log("Hello from cart! For git testing");
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cartItems);

  const getTotal = () => {
    return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  useEffect(() => {
    dispatch(cartItemsReceived());
  }, [dispatch]);

  if (cart.length === 0) {
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
        <tbody>
          <tr>
            <th>Item</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>

          {cart.map((item) => (
            <CartItem {...item} key={`item${item._id}`} />
          ))}

          <tr>
            <td colSpan="3" className="total">
              Total: ${getTotal()}
            </td>
          </tr>
        </tbody>
      </table>
      <button className="button checkout">Checkout</button>
    </div>
  );
};

export default Cart;
