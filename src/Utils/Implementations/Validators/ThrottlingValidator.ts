import NodeCache from "node-cache";

import {BaseValidator} from "./BaseValidator";

import {ValidatorRequest} from "../../../Types/ValidatorRequest";
import {ValidatorResponse} from "../../../Types/ValidatorResponse";

/*
    Checks the client's defined cache for a specified amount of request failures
    of a given IP address
*/
export class ThrottlingValidator extends BaseValidator {
    private cache: NodeCache;
    private readonly MAXIMUM_FAILED_REQUESTS: number;

    constructor(cache: NodeCache, maximumFR: number) {
        super();
        this.cache = cache;
        this.MAXIMUM_FAILED_REQUESTS = maximumFR;
    }

    validate(request: ValidatorRequest): ValidatorResponse {
        let retries = this.cache.get(request.ip) ? this.cache.get(request.ip) as number : 0

        if(retries >= this.MAXIMUM_FAILED_REQUESTS) {
            return new ValidatorResponse(false, "Maximum retries reached");
        }

        return super.validate(request);
    }
}