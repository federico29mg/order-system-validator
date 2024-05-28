import {DataCheck} from "../../Interfaces/DataCheck";

/*
    Validates the integrity of the data for creating an order
*/
export class CreateOrderDataCheck implements DataCheck {
    check(body: string): boolean {
        let jsonBody = JSON.parse(body);
        let products = jsonBody.products;

        for (let product of products) {
            if(product.price == null || product.price <= 0) {
                return false;
            }

            if(product.quantity == null || product.quantity <= 0) {
                return false;
            }

            if(product.sku == null || product.sku <= 0) {
                return false;
            }
        }

        return true;
    }
}