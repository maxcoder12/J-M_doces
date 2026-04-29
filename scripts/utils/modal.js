import { createProduct } from "../models/productFactory.js";
import { addToCart } from "../services/cart.js";

export function openModal(item, tipo) {
    const modal = document.getElementById("modal");

    let imgSrc = item.img.split(".")[0] + "_two.jpeg";

    document.getElementById("modal-img").src = imgSrc;
    document.getElementById("modal-title").textContent = item.title;
    document.getElementById("modal-subtitle").textContent = item.desc;
    document.getElementById("modal-price").textContent = item.price;

    const list = document.getElementById("modal-list");
    list.innerHTML = "";

    const product = createProduct(item, tipo);
    product.renderDetails(list);

    const btn = document.getElementById("modal-button");
    btn.addEventListener("click", (e) => {
        e.stopPropagation();
        addToCart(item);
    });

    modal.style.display = "block";

    document.querySelector(".close").onclick = () => {
        modal.style.display = "none";
    };

    window.onclick = (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    };
}