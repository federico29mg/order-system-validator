import {BaseValidator} from "./BaseValidator";

import {ValidatorRequest} from "../../../Types/ValidatorRequest";
import {ValidatorResponse} from "../../../Types/ValidatorResponse";

import {DataCheckFactory} from "../../DataCheckFactory";

/*
    Verifies the data for the modifying methods of the API.
*/
export class DataValidator extends BaseValidator {
    validate(request: ValidatorRequest): ValidatorResponse {
        let dataCheck = new DataCheckFactory().getDataCheck(request.operation);

        if (dataCheck) {
            if(!dataCheck.check(request.body)) {
                return new ValidatorResponse(false, 'Data validation failed.');
            }
        }

        return super.validate(request);
    }
}