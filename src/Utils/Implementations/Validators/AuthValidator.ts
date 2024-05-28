import {BaseValidator} from "./BaseValidator";

import {ValidatorRequest} from "../../../Types/ValidatorRequest";
import {ValidatorResponse} from "../../../Types/ValidatorResponse";

/*
    Authenticates the user against the order system API.
*/
export class AuthValidator extends BaseValidator {
    validate(request: ValidatorRequest): ValidatorResponse {
        let success = this.authenticate(request.email, request.password);

        if (!success) {
            return new ValidatorResponse(false, 'Auth validation failed.');
        }

        return super.validate(request);
    }

    async authenticate(email: string, password: string): Promise<boolean> {
        const authData = {
            email: email,
            password: password,
        };

        const authOptions = {
            method: 'POST',
            body: JSON.stringify(authData),
            headers: {'Content-Type': 'application/json'}
        }

        const url = 'https://orders-system-api.onrender.com/auth/token';

        try {
            const response = await fetch(url, authOptions);
            return response.ok;
        }
        catch (error) {
            return false;
        }
    }
}