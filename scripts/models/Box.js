import { Product } from "./Product.js";

export class Box extends Product {
    constructor(data) {
        super(data);    
        this.items = data.items;
    }

    renderDetails(container) {
        this.items.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            container.appendChild(li);
        });
    }
}