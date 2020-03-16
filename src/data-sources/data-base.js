import { reports } from "./fake-reports";
import * as R from "ramda";

// Fake API Call
export const fetchReports = (query) => new Promise((resolve, reject) => {
    window.setTimeout(function () {
        const results = R.filter(report => query.pin && report.pin.startsWith(query.pin))(reports);
        resolve(results);  // Yay! Everything went well!
    }, 100);
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