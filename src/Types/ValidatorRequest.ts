import {Operation} from "./Operation";

/*
    Class for the client to put all the relevant data of the request
    that's going to be validated
*/
export class ValidatorRequest {
    email: string;
    password: string;
    operation: Operation;
    ip: string;
    body: string;

    constructor(email: string, password: string, operation: Operation, ip: string, body: string) {
        this.email = email;
        this.password = password;
        this.operation = operation;
        this.ip = ip;
        this.body = body;
    }

    // Creates a unique key for the sent request so it can be stored/read from the cache
    getKey(): string {
        return btoa(this.email + this.password + this.operation + this.ip + this.body);
    }
}