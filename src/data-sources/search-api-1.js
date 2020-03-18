import { searchResults1 } from "./fake-data";


// Fake API Call
export const search = (pin = "") => new Promise((resolve, reject) => {
    window.setTimeout(function () {
        const results = searchResults1.filter(result => result.pin.startsWith(pin.trim()));
        resolve(results);  // Yay! Everything went well!
    }, 250);
});