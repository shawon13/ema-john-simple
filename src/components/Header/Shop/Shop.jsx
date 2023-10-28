import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../../Product/Product';
import Cart from '../../Cart/Cart';
import { addToDb, getShoppingCart } from '../../../utilities/fakedb';
const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    const handleAddToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
        addToDb(product.id)
    }
    useEffect(() => {
        const storedCart = getShoppingCart();
        const savedCart = [];
        // step-1 get id of the addedproduct
        for (const id in storedCart) {
            // step-2 get product from products state by using id
            const addedProduct = products.find(product => product.id === id);
            if (addedProduct) {
                // step-3 added quantity
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                // step-4 push addedProduct in savedCart
                savedCart.push(addedProduct);
            }
        }
        // step-5 added savedCart in setCart
        setCart(savedCart);
    }, [products])

    return (
        <div className='shop-container'>
            <div className='product-container'>
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    ></Product>)
                }
            </div>
            <div className='cart-container'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;