import { searchResults2 } from "./fake-data";


// Fake API Call
export const search = (pin = "") => new Promise((resolve, reject) => {
    window.setTimeout(function () {
        const results = searchResults2.filter(result => result.pin.startsWith(pin.trim()));
        resolve(results);  // Yay! Everything went well!
    }, 250);
});