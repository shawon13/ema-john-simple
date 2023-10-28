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
        let newCart = [];
        // const newCart = [...cart, product];
        // if product doesn't exist in the cart, then set quantity=1
        // if exist update quantity by 1
        const exists = cart.find(pd => pd.id === product.id);
        if (!exists) {
            product.quantity = 1;
            newCart = [...cart, product]
        }
        else {
            exists.quantity = exists.quantity + 1;
            const remaining = cart.filter(pd => pd.id !== product.id);
            newCart = [...remaining, exists];
        }

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