// @flow
import { isValidDate } from "../libs/validators";
import { formatPhoneNumber, formatEmail } from "../libs/formatters";
import Address from "./address";

export default class ReportSubject {
    created: ?Date;
    email: ?string;
    id: ?string;
    lastName: ?string;
    firstName: ?string;
    phoneNumber: ?string;
    address: ?Address;
    updated: ?Date;

    constructor(args: Object = {}) {
        this.created = isValidDate(args.created)
            ? new Date(args.created)
            : new Date();
        this.email = formatEmail(args.email);
        this.id = typeof args.id === "string"
            ? args.id
            : null;
        this.firstName = typeof args.firstName === "string"
            ? args.firstName
            : null;
        this.lastName = typeof args.lastName === "string"
            ? args.lastName
            : null;
        this.phoneNumber = formatPhoneNumber(args.phoneNumber);
        this.address = Address.create(args.address || {});
        this.updated = isValidDate(new Date(args.updated))
            ? new Date(args.updated)
            : null;
    }

    static create(args: ?Object, id?: string): ReportSubject {
        const _args = args || {};
        if (Boolean(id)) {
            _args.id = id;
        }
        return JSON.parse(JSON.stringify(new ReportSubject(_args)));
    }


}
