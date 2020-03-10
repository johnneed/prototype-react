// @flow
import { isValidDate } from "../libs/validators";
import { formatPhoneNumber, formatEmail } from "../libs/formatters";
import Address from "./address";

export default class ReportVehicle {
    created: ?Date;
    licensePlateNumber: ?string;
    id: ?string;
    licensePlateState: ?string;
    licensePlateCountry: ?string;
    updated: ?Date;
    vehicleModel: ?string;
    vehicleYear: ?string;
    vehicleMake: ?string;

    constructor(args: Object = {}) {
        this.created = isValidDate(args.created)
            ? new Date(args.created)
            : new Date();
        this.id = typeof args.id === "string"
            ? args.id
            : null;
        this.vehicleMake = typeof args.vehicleMake === "string"
            ? args.vehicleMake
            : null;
        this.vehicleModel = typeof args.vehicleModel === "string"
            ? args.vehicleModel
            : null;
        this.vehicleYear = typeof args.vehicleYear === "string"
            ? args.vehicleYear
            : null;
        this.vehicleColor = typeof args.vehicleColor === "string"
            ? args.vehicleColor
            : null;
        this.licensePlateNumber = typeof args.licensePlateNumber === "string"
            ? args.licensePlateNumber
            : null;
        this.licensePlateState = typeof args.licensePlateState === "string"
            ? args.licensePlateState
            : null;
        this.licensePlateCountry = typeof args.licensePlateCountry === "string"
            ? args.licensePlateCountry
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
