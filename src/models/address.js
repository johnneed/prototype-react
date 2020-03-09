// @flow

export default class Address {
    street: ?string;
    street2: ?string;
    aptNo: ?string;
    city: ?string;
    stateProvince: ?string;
    country: ?string;
    postalCode: ?string;

    constructor(args: ?Object) {
        this.city = (args || {}).city || "";
        this.stateProvince = (args || {}).stateProvince || "";
        this.street = (args || {}).street || "";
        this.street2 = (args || {}).street2 || "";
        this.aptNo = (args || {}).aptNo || "";
        this.postalCode = (args || {}).postalCode || "";
        this.country = (args || {}).country || "USA";
    }

    static create(args: Object = {}): Address {
        return JSON.parse(JSON.stringify(new Address(args)));
    }

    static toString(address: Address): string {
        const a = typeof address !== "object" ? {} : address;
        const street = (add => {
            switch (true) {
                case Boolean(add.street && add.street2):
                    return `${ add.street.trim() } / ${ add.street2.trim() } `;
                case add.street2 && !add.street:
                    return `${ add.street2.trim() } `;
                case add.street && !add.street2:
                    return `${ add.street.trim() } `;
                default:
                    return "";
            }
        })(a);
        return (`${ street }${ Boolean(a.aptNo) ? `${ a.aptNo } ` : "" }${ a.city } ${ a.stateProvince } ${ a.postalCode }`).trim();

    }


}