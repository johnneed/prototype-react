const reports = {
    3: {
        dateTime: Date(),
        pin: 3472,
        type: "accident",
        officer: "Jones"
    },
    4: {
        dateTime: Date(),
        pin: 3456,
        type: "traffic stop",
        officer: "Smith"
    }
};

// Fake API Call
export const search = () => new Promise((resolve, reject) => {
    window.setTimeout(function () {
        resolve(reports);  // Yay! Everything went well!
    }, 250);
});