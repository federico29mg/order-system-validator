import NodeCache from "node-cache";

import {Validator} from "./Interfaces/Validator";
import {AuthValidator} from "./Implementations/Validators/AuthValidator";
import {CacheValidator} from "./Implementations/Validators/CacheValidator";
import {DataValidator} from "./Implementations/Validators/DataValidator";
import {ThrottlingValidator} from "./Implementations/Validators/ThrottlingValidator";

/*
    Builder class for the client to build a desired chain of validations
    in the desired order
*/
export class ValidatorChainBuilder {
    private validator: Validator | undefined;

    constructor() {};

    addAuth(): ValidatorChainBuilder {
        this.add(new AuthValidator());
        return this;
    };

    addData(): ValidatorChainBuilder {
        this.add(new DataValidator());
        return this;
    };

    addThrottling(cache: NodeCache, maximumFR: number): ValidatorChainBuilder {
        this.add(new ThrottlingValidator(cache, maximumFR));
        return this;
    };

    addCache(cache: NodeCache): ValidatorChainBuilder {
        this.add(new CacheValidator(cache));
        return this;
    };

    addCustom(validator: Validator): ValidatorChainBuilder {
        this.add(validator);
        return this;
    };

    build(): Validator | undefined {
        return this.validator;
    };

    add(validator: Validator): void {
        !validator ? this.validator = validator : this.validator?.setNext(validator);
    };
}