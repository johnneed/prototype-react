import { searchResults } from "./fake-reports";


// Fake API Call
export const search = (pin = "") => new Promise((resolve, reject) => {
    window.setTimeout(function () {
        const results = searchResults.filter(result => result.pin.startsWith(pin.trim()));
        resolve(results);  // Yay! Everything went well!
    }, 250);
});