// @flow
import { isValidDate } from "../libs/validators";
import { formatPhoneNumber, formatEmail } from "../libs/formatters";
import Address from "./address";

export default class ReportVehicle {
    created: ?Date;
    plateNumber: ?string;
    id: ?string;
    plateState: ?string;
    plateCountry: ?string;
    updated: ?Date;

    constructor(args: Object = {}) {
        this.created = isValidDate(args.created)
            ? new Date(args.created)
            : new Date();
        this.id = typeof args.id === "string"
            ? args.id
            : null;
        this.plateNumber = typeof args.plateNumber === "string"
            ? args.plateNumber
            : null;
        this.plateState = typeof args.plateState === "string"
            ? args.plateState
            : null;
        this.plateCountry = typeof args.plateCountry === "string"
            ? args.plateCountry
            : "USA";
        this.updated = isValidDate(new Date(args.updated))
            ? new Date(args.updated)
            : null;
    }

    static create(args: ?Object, id?: string): ReportVehicle {
        const _args = args || {};
        if (Boolean(id)) {
            _args.id = id;
        }
        return JSON.parse(JSON.stringify(new ReportVehicle(_args)));
    }


}
