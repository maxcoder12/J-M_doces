export function createCard(item) {
    const card = document.createElement("div");
    card.classList.add("card");

    const img = document.createElement("img");
    img.src = item.img;
    img.alt = item.title;

    const content = document.createElement("div");
    content.classList.add("card-content");

    const title = document.createElement("h3");
    title.textContent = item.title;

    const price = document.createElement("p");
    price.classList.add("price");
    price.textContent = item.price;

    const desc = document.createElement("p");
    desc.classList.add("desc");
    desc.textContent = `"${item.desc}"`;
    desc.style.fontStyle = "italic";

    content.append(title, price, desc);
    card.append(img, content);

    return card;
}