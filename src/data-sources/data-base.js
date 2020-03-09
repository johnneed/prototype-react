const reports = {
    report1: {
        dateTime: Date("2020-01-01"),
        pin: 1234,
        type: "accident",
        officer: "Jones",
        subject: {firstName: "Ethan", lasName: "Allen"},
        vehicle: {vehicleColor: "red", vehicleYear: "2020", vehicleMake: "Honda", vehicleModel: "Accord", licensePlateNumber: "BAD 999"}
    },
    report2: {
        dateTime: Date("2020-02-19"),
        pin: 3456,
        type: "traffic stop",
        officer: "Smith",
        subject: {firstName: "Fred", lasName: "Frederickson"},
        vehicle: {vehicleYear: "1999", vehicleMake: "Ford", vehicleModel: "Fiesta", licensePlateNumber: "ABC 123"}
    },
    report3: {
        dateTime: Date("2020-02-29"),
        pin: 1234,
        type: "traffic stop",
        officer: "Smith",
        subject: {firstName: "Ethan", lasName: "Allen"},
        vehicle: {vehicleColor: "red", vehicleYear: "2020", vehicleMake: "Honda", vehicleModel: "Accord", licensePlateNumber: "BAD 999"}
    },
};

// Fake API Call
export const fetchReports = () => new Promise((resolve, reject) => {
    window.setTimeout(function () {
        resolve(reports);  // Yay! Everything went well!
    }, 3000);
});


// Fake API Call
export const deleteReport = (report) => new Promise((resolve, reject) => {
    window.setTimeout(function () {
        resolve(true);  // Yay! Everything went well!
    }, 250);
});


// Fake API Call
export const saveReport = (report) => new Promise((resolve, reject) => {
    window.setTimeout(function () {
        resolve(true);  // Yay! Everything went well!
    }, 1250);
});