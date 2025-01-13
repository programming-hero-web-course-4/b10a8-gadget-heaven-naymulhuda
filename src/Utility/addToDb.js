const getStoredAddToCart = () => {
    const storedCartStr = localStorage.getItem('cart');
    if (storedCartStr) {
        const storedCart = JSON.parse(storedCartStr);
        return storedCart;
    }
    else {
        return [];
    }
}

const addToStoredAddToCart = (id) => {
    const storedCart = getStoredAddToCart();
    if (storedCart.includes(id)) {
        // already exist
        console.log(id ,'already exists in the cart')
    }
    else {
        storedCart.push(id);
        const storedCartStr = JSON.stringify(storedCart);
        localStorage.setItem('cart', storedCartStr)
        console.log(id, 'added to the cart');
    }
}

export { addToStoredAddToCart };