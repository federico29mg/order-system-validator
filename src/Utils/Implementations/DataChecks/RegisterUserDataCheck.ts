import {DataCheck} from "../../Interfaces/DataCheck";

/*
    Validates the integrity of the data for registering an user
*/
export class RegisterUserDataCheck implements DataCheck {
    check(body: string): boolean {
        let success: boolean = true;
        let jsonBody = JSON.parse(body);

        if(jsonBody.username == null || jsonBody.username == "") {
            success = false;
        }

        if(jsonBody.email == null || jsonBody.email == "") {
            success = false;
        }

        if(jsonBody.full_name == null || jsonBody.full_name == "") {
            success = false;
        }

        if(jsonBody.disabled == null) {
            success = false;
        }

        if(jsonBody.password == null || jsonBody.password == "") {
            success = false;
        }

        return success;
    }
}