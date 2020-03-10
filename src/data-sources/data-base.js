import {reports} from "./fake-reports";

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