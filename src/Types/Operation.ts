/*
    Enum class for the client to specify if the request
    its trying to validate adds or changes data in the database
    of the order system
 */
export enum Operation {
    UpdateProduct = 'UpdateProduct',
    CreateProduct = 'CreateProduct',
    CreateOrder = 'CreateOrder',
    RegisterUser = 'RegisterUser',
    Other = 'Other',
}