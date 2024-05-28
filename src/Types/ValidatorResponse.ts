/*
    Class to notify the client if the validations where
    successful, and, if it exists, a response from the cache
*/
export class ValidatorResponse {
    success: boolean = true;
    response: string = "";

    constructor(success: boolean, response: string) {
        this.success = success;
        this.response = response;
    }
}