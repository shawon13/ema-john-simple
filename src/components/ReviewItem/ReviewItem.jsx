import React from 'react';
import './ReviewItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
const ReviewItem = ({ product, handleRemoveItem }) => {
    const { id, img, name, price, quantity } = product;
    return (
        <div className='review-item'>
            <img src={img} alt="" />
            <div className='review-details'>
                <p className='title'>{name}</p>
                <p>Price: <span className='text-orange'>${price}</span></p>
                <p>Order Quantity: <span className='text-orange'>{quantity}</span></p>
            </div>
            <button onClick={() => handleRemoveItem(id)} className='delete-btn'><FontAwesomeIcon className='delete-icon' icon={faTrashCan} /></button>
        </div>
    );
};

export default ReviewItem;