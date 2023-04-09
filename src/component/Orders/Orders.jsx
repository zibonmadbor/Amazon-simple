import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { Link, useLoaderData } from 'react-router-dom';
import Product from '../Product/Product';
import ReviewItem from '../ReviewItem/ReviewItem';
import './order.css'
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';

const Orders = () => {
    const savedCart = useLoaderData()

    const [cart, setCart] =useState(savedCart)
    const handleRemoveCart = (id) =>{
        const rest = cart.filter(pd => pd.id !== id);
        setCart(rest);
        removeFromDb(id) //its come from fakeDb
    }
    const handleRemoveAll = () =>{
        setCart([]);
        deleteShoppingCart();

    }
    return (
        <div className="shop-container">
            <div className="review-container">
                {
                    cart.map(product => <ReviewItem 
                        key={product.id}
                        product={product}
                        handleRemoveCart={handleRemoveCart}
                         ></ReviewItem>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart} handleRemoveAll={handleRemoveAll}>
                    <Link to='/checkout'><button className='btn-proceed'>Proceed Checkout</button></Link>
                </Cart>


            </div>
        </div>
    );
};

export default Orders;