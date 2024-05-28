import NodeCache from "node-cache";

import {BaseValidator} from "./BaseValidator";

import {ValidatorRequest} from "../../../Types/ValidatorRequest";
import {ValidatorResponse} from "../../../Types/ValidatorResponse";

/*
    Checks the client's defined cache for the response of a similar past request
*/
export class CacheValidator extends BaseValidator {
    private cache: NodeCache;

    constructor(cache: NodeCache) {
        super();
        this.cache = cache;
    }

    validate(request: ValidatorRequest): ValidatorResponse {
        let key = request.getKey();
        let response = this.cache.get(key) ? this.cache.get(key) as string : '';

        if(response != '') {
            return new ValidatorResponse(true, response);
        }

        return super.validate(request);
    }
}