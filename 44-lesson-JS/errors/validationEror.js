import { Error } from "./error.js";

export class ValidationError extends Error{
    constructor(message){
        super(message,'Validation Error !!!');
    }
}