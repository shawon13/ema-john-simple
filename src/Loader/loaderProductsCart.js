import { getShoppingCart } from "../utilities/fakedb";

const loaderProductsCart = async () => {
    const loadedProducts = await fetch('products.json');
    const products = await loadedProducts.json();
    const storedCart = getShoppingCart();
    const saveCart = [];
    for (const id in storedCart) {
        const addedProduct = products.find(product => product.id === id);
        if (addedProduct) {
            const quantity = storedCart[id];
            addedProduct.quantity = quantity;
            saveCart.push(addedProduct);
        }
    }
    // if you need to send two things
    // return [products,saveCart]
    // another options
    // return {products,cart:saveCart}

    return saveCart;
}
export default loaderProductsCart;