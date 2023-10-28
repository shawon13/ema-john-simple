import React from 'react';
import './Cart.css'
const Cart = ({ cart }) => {
    // const cart=props.cart; option-1
    // const { cart } = props; // option-2
    let totalPrice = 0;
    let shipping = 0;
    for (const product of cart) {
        totalPrice = totalPrice + product.price;
        shipping = shipping + product.shipping;
    }
    const tax = totalPrice * 7 / 100;
    const grandTotal = totalPrice + shipping + tax;
    return (
        <div className='cart'>
            <h3 style={{ textAlign: 'center' }}>Order Summary</h3>
            <p>Selected Items: {cart.length}</p>
            <p>Total Price: ${totalPrice}</p>
            <p>Total Shipping: ${shipping} </p>
            <p>Tax: ${tax.toFixed(2)} </p>
            <p>Grand Total: ${grandTotal.toFixed(2)}</p>
        </div>
    );
};

export default Cart;