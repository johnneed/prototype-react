// @flow
import { isValidDate } from "../libs/validators";
import ReportVehicle from "./report-vehicle";
import ReportSubject from "./report-subject";

export default class Report {
    created: ?Date;
    dateTime: ?Date;
    id: ?string;
    officer: ?string;
    type: ?string;
    pin: ?string;
    updated: ?Date;
    vehicle: ReportVehicle;
    subject: ReportSubject;
    details: ?string;

    constructor(args: Object = {}) {
        this.created = isValidDate(args.created)
            ? new Date(args.created)
            : new Date();
        this.dateTime = Boolean(args.dateTime)
            ? args.dateTime
            : new Date();
        this.id = typeof args.id === "string"
            ? args.id
            : null;
        this.officer = typeof args.officer === "string"
            ? args.officer
            : null;
        this.type = typeof args.type === "string"
            ? args.type
            : null;
        this.pin = typeof args.pin === "string"
            ? args.pin
            : null;
        this.updated = isValidDate(new Date(args.updated))
            ? new Date(args.updated)
            : null;
        this.vehicle = ReportVehicle.create(args.vehicle);
        this.subject = ReportSubject.create(args.subject);
        this.details = args.details || "";
    }

    static create(args: ?Object, id?: string): Report {
        const _args = args || {};
        if (Boolean(id)) {
            _args.id = id;
        }
        return JSON.parse(JSON.stringify(new Report(_args)));
    }


}
