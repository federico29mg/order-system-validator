import {DataCheck} from "../../Interfaces/DataCheck";

/*
    Validates the integrity of the data for creating a product
*/
export class CreateProductDataCheck implements DataCheck {
    check(body: string): boolean {
        let success: boolean = true;
        let jsonBody = JSON.parse(body);

        if(jsonBody.sku == null || jsonBody.sku == "") {
            success = false;
        }

        if(jsonBody.name == null || jsonBody.name == "") {
            success = false;
        }

        if(jsonBody.description == null || jsonBody.description == "") {
            success = false;
        }

        if(jsonBody.price == null || jsonBody.price <= 0) {
            success = false;
        }

        return success;
    }
}