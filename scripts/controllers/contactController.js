import { getCart, clearCart } from "../services/cart.js";
import { parsePrice, formatPrice } from "../utils/price.js";

export function initContact() {
    renderCart();

    document.getElementById("order-form").addEventListener("submit", sendOrder);

}

function renderCart() {
    const cart = getCart();
    const container = document.getElementById("cart-items");
    const totalEl = document.getElementById("cart-total");

    container.innerHTML = "";

    let total = 0;

    cart.forEach(item => {
        const price = parsePrice(item.price);
        const subtotal = price * item.quantity;

        const div = document.createElement("div");
        div.textContent = `${item.quantity}x ${item.title} - ${formatPrice(subtotal)}`;
        container.appendChild(div);

        total += subtotal;

    });

    totalEl.textContent = `${formatPrice(total)}`;
}

function sendOrder(e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const lastName = document.getElementById("lastname").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const address = document.getElementById("address").value;

    const cart = getCart();

    let message = `*Novo Pedido*\n`;
    message += `*Nome:* ${name} ${lastName}\n`;
    message += `*Email:* ${email}\n`;
    message += `*Telefone:* ${phone}\n`;
    message += `*Endereço:* ${address}\n\n`;

    let total = 0;

    cart.forEach(item => {

        const price = parsePrice(item.price);
        const subtotal = price * item.quantity;

        total += subtotal;
        
        message += `- ${item.quantity}x ${item.title} - ${formatPrice(subtotal)}\n`;
    
    });

    message += `\n*Total:* ${formatPrice(total)}`;

    const yourNumber = "5553997120752";

    const endcodedMessage = encodeURIComponent(message);

    const url = `https://wa.me/${yourNumber}?text=${endcodedMessage}`;
    window.open(url, "_blank");

    clearCart();
}
