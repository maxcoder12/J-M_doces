export function parsePrice(price) {
    return Number(
        price
            .replace("R$", " ")
            .replace(",", ".")    
    );
}

export function formatPrice(value) {
    return "R$" + value.toFixed(2);
}