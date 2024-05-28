import {ValidatorRequest} from "../../Types/ValidatorRequest";
import {ValidatorResponse} from "../../Types/ValidatorResponse";

/*
    Interface to define common behavior between validator classes
*/
export interface Validator {
    setNext(validator: Validator): Validator;
    validate(request: ValidatorRequest): ValidatorResponse;
}