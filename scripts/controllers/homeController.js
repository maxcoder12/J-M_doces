import { produtos } from "../services/data.js";
import { createCard } from "../utils/createCard.js";
import { createProduct } from "../models/productFactory.js";

export function initHome() {
    renderProdutos();
    renderDestaques();
}

function renderProdutos() {
    const container = document.getElementById("product-container");

    produtos.doces.forEach(item => {
        const product = createProduct(item, "doce");
        const card = createCard(product);

        const btn = document.createElement("a");
        btn.href = "cardapio.html";
        btn.target = "_blank";
        btn.textContent = "Ver mais";
        btn.classList.add("card-btn");

        card.appendChild(btn);
        container.appendChild(card);
    });
}

function renderDestaques() {
    const container = document.getElementById("combos-boxes-container");
    
    const especial = produtos.boxes.find(box => box.title === "Caixa Presente J&M");
    const randomBox = produtos.boxes[Math.floor(Math.random() * produtos.boxes.length - 1)];
    const randomCombo = produtos.combos[Math.floor(Math.random() * produtos.combos.length)];

    [randomBox, especial, randomCombo].forEach(item => {
        const product = createProduct(item, "box");
        const card = createCard(product);
        card.classList.remove("card");
        card.classList.add("card-two");

        const btn = document.createElement("a");
        btn.href = "contact.html";
        btn.textContent = "Peça agora";
        btn.classList.add("card-btn");

        const list = document.createElement("ul");
        list.classList.add("card-list");
        list.style.listStyle = "none";
        product.renderDetails(list);
        list.querySelectorAll("li").forEach(li => {
            li.textContent = `- ${li.textContent}`;
        });
        card.querySelector(".card-content").appendChild(list);

        card.querySelector(".card-content").appendChild(btn);

        container.appendChild(card);
    });
}