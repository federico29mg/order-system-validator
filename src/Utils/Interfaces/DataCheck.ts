/*
    Interface to define common behavior between DataCheck classes
*/
export interface DataCheck {
    check(body: string): boolean;
}