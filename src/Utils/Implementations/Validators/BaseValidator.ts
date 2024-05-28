import {Validator} from "../../Interfaces/Validator";

import {ValidatorRequest} from "../../../Types/ValidatorRequest";
import {ValidatorResponse} from "../../../Types/ValidatorResponse";

/*
    Parent class of all validations.
    Defines a common method for setting the next validator to execute.
    Goes through all linked validators until one of them fails or all of them pass
*/
export abstract class BaseValidator implements Validator {
    private nextValidator: Validator | undefined;

    constructor() {};

    setNext(validator: Validator): Validator {
        this.nextValidator = validator;
        return validator;
    };

    validate(request: ValidatorRequest): ValidatorResponse {
        if(this.nextValidator) {
            return this.nextValidator.validate(request);
        }
        return new ValidatorResponse(true, "");
    };
}