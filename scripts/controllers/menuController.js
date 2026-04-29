import { produtos } from "../services/data.js";
import { createCard } from "../utils/createCard.js";
import { openModal } from "../utils/modal.js";
import { initCarousel } from "../utils/carousel.js";

export function initMenu() {
    render("doces-container", produtos.doces, "doce");
    render("boxes-container", produtos.boxes, "box");
    render("combos-container", produtos.combos, "combo");

    initCarousel();
}

function render(containerId, data, tipo) {
    const container = document.getElementById(containerId);

    data.forEach(item => {
        const card = createCard(item);

        card.addEventListener("click", () => openModal(item, tipo));

        container.appendChild(card);
    });
}