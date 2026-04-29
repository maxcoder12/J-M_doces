import { initHome } from "./controllers/homeController.js";
import { initMenu } from "./controllers/menuController.js";
import { initContact } from "./controllers/contactController.js";

document.addEventListener("DOMContentLoaded", () => {

    if (document.getElementById("product-container")) {
        initHome();
    }

    if (document.getElementById("doces-container")) {
        initMenu();
    }

    if (document.getElementById("order-form")) {
        initContact();
    }

});