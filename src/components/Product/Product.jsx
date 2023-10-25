import React from 'react';
import './Product.css'
const Product = (props) => {
    console.log(props)
    const { name, img, price, seller, ratings } = props.product;
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
            <button className="cart-btn">Add To Cart</button>
        </div>
    );
};

export default Product;