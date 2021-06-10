import React from 'react';

const CartItem = ({
    title,
    price,
    quantity,
}) => {
    return (
        <tr>
            <td>{title}</td>
            <td>{quantity}</td>
            <td>${price}</td>
        </tr>
    );
};

export default CartItem;