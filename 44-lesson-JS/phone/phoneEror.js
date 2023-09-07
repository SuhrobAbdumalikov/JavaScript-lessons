import { PhoneError } from "./phone.js";

export class ValidationPhoneError extends PhoneError{
    constructor(number) {
        if (number[0] === '+') {
        const num = number.slice(1,number.length);
        }
        super(number, 'Phone Error! Try Again Please ...!');
    }
}