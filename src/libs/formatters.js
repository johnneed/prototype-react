// @flow
import * as R from "ramda";
import { isValidEmail } from "./validators";

export const formatEmail = (email: any): ?string => typeof email === "string" ? email.trim().toLowerCase() : null;

export const formatPhoneNumber = (phoneNumber: ?string): ?string => {
    if (!["string", "number"].includes(typeof phoneNumber)) {
        return null;
    }
    const formatter = R.cond([
        [
            pNum => pNum.length === 10,
            pNum => `(${ pNum.slice(0, 3) }) ${ pNum.slice(3, 6) }-${ pNum.slice(-4) }`
        ],
        [
            pNum => pNum.length === 7,
            pNum => `${ pNum.slice(0, 3) }-${ pNum.slice(-4) }`
        ],
        [R.T, () => null]
    ]);

    const allNums = phoneNumber.toString().replace(/[^0-9]/g, "");

    return formatter(allNums);

};