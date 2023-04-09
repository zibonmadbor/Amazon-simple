import React from 'react';
import './Card.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'

const Cart = (props) => {
    const {cart, handleRemoveAll, children} = props;

    console.log(cart)

    let totalPrice= 0;
    let totalShipping = 0;
    let quantity = 0;
    for(const product of cart){
        if(product.quantity === 0){
            product.quantity = 1;
        }
        totalPrice = totalPrice+ product.price * product.quantity;
        totalShipping = totalShipping + product.shipping * product.quantity;
        quantity = quantity + product.quantity;
    }

    const TotalTax = totalPrice*7/100;
    const grandTotal = totalPrice + TotalTax+ totalShipping;
    return (
        <div className='cart'>
            <h2>Order Summary</h2>
            <p>Selected Items: {quantity}</p>
            <p>Total Price: ${totalPrice}</p>
            <p>Total Shipping Charge: ${totalShipping}</p>
            <p>Tax: ${TotalTax.toFixed(2)}</p>
            <h4>Grand Total: ${grandTotal.toFixed(2)}</h4>
            <button onClick={handleRemoveAll} className='cart-dlt-all'>
                <span>Clear Cart</span>
            <FontAwesomeIcon  icon={faTrashCan} />
            </button>
            {children}
        </div>
    );
};

export default Cart;