import React, { useEffect, useState } from 'react';
import { addToDb, deleteShoppingCart, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
import { Link } from 'react-router-dom';
const Shop = () => {

    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    useEffect(() => {
        const storedCart = getShoppingCart();
        const savedCart = [];
        //step:1 get id
        for (const id in storedCart) {
            //step:2 get the product by using id
            const addedProduct = products.find(product => product.id === id)
            console.log(addedProduct)
            if (addedProduct) {
                //step:3 get quantity of the product 
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                //step: add the added product to the saved cart
                savedCart.push(addedProduct)
            }
        }
        console.log(savedCart)
        // step:5 set the cart
        setCart(savedCart)
    }, [products])
    const handleAddToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
        addToDb(product.id)
    }
    const handleRemoveAll = () =>{
        setCart([]);
        deleteShoppingCart()

    }

    return (
        <div className="shop-container">
            <div className="products-container">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    ></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart} handleRemoveAll={handleRemoveAll}>
                    <Link to='/orders'><button className='btn-proceed'>Review Order</button></Link>
                </Cart>


            </div>
        </div>
    );
};

export default Shop;