import React from 'react';
import './reviewItem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'

const ReviewItem = ({ product,handleRemoveCart }) => {
    const { id, img, price, name, quantity } = product;
    return (
        <div className='review-item'>
            <img src={img} alt="" />
            <div className='product-item'>
                <p className='name'>{name}</p>
                <p>Price: <span class='price'>${price}</span></p>
                <p>Order Quantity: <span class='price'>{quantity}</span> </p>
            </div>
            <button
            onClick={() => handleRemoveCart(id)}
            className='btn-delete'>
                <FontAwesomeIcon className='delete-icon' icon={faTrashCan} />
            </button>
        </div>
    );
};

export default ReviewItem;