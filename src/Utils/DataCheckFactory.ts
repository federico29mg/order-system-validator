import {DataCheck} from "./Interfaces/DataCheck";
import {UpdateProductDataCheck} from "./Implementations/DataChecks/UpdateProductDataCheck";
import {CreateProductDataCheck} from "./Implementations/DataChecks/CreateProductDataCheck";
import {CreateOrderDataCheck} from "./Implementations/DataChecks/CreateOrderDataCheck";
import {RegisterUserDataCheck} from "./Implementations/DataChecks/RegisterUserDataCheck";

import {Operation} from "../Types/Operation";


/*
    Factory class to create a DataCheck class and give it
    to the DataValidator to execute
*/
export class DataCheckFactory {
    constructor() {};

    getDataCheck(operation: Operation): DataCheck | undefined {
        switch (operation) {
            case Operation.UpdateProduct:
                return new UpdateProductDataCheck();
            case Operation.CreateProduct:
                return new CreateProductDataCheck();
            case Operation.CreateOrder:
                return new CreateOrderDataCheck();
            case Operation.RegisterUser:
                return new RegisterUserDataCheck();
            default:
                return undefined;
        }
    };
}