import { Doce } from './Doce.js';
import { Box } from './Box.js';
import { Product } from './Product.js';

export function createProduct(data, tipo) {
    switch (tipo) {
        case 'doce':
            return new Doce(data);
        case 'box':
        case 'combo':
            return new Box(data);
        default:
            return new Product(data);
    }
}