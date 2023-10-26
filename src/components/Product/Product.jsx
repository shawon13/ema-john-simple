import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css'
const Product = (props) => {
    const { name, img, price, seller, ratings } = props.product;
    const handleAddToCart = props.handleAddToCart;
    return (
        <div className='product'>
            <img src={img} className="card-img-top" alt="" />
            <div className="product-body">
                <div>
                    <h6 className="product-name">{name}</h6>
                    <p className="product-text">Price: ${price}</p>
                </div>
                <div>
                    <p className="product-text">Manufacturer: {seller}</p>
                    <p className="product-text">Rating: {ratings} Stars</p>
                </div>
            </div>
            <button className="cart-btn" onClick={() => handleAddToCart(props.product)}>Add To Cart <FontAwesomeIcon icon={faShoppingCart} /></button>
        </div>
    );
};

export default Product;