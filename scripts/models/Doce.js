import { Product } from "./Product.js";

export class Doce extends Product {
    constructor(data) {
        super(data);
        this.ingred = data.ingred;
        this.cobert = data.cobert;
    }

    renderDetails(container) {
        this.ingred.forEach(ingred => {
            const li = document.createElement('li');
            li.textContent = ingred;
            container.appendChild(li);
        });

        if (this.cobert) {
            this.cobert.forEach(cobert => {
                const li = document.createElement('li');
                li.textContent = cobert;
                container.appendChild(li);
            });
        }
    }
}
            