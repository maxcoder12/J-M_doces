const CART_KEY = "jm_cart";

export function getCart() {
    return JSON.parse(localStorage.getItem(CART_KEY)) || [];
}

export function saveCart(cart) {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

export function addToCart(product) {
    const cart = getCart();

    const existing = cart.find(item => item.title === product.title);
    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({
            title: product.title,
            price: product.price,
            quantity: 1
         });
    }

    saveCart(cart);
}

export function clearCart() {
    localStorage.removeItem(CART_KEY);
}

