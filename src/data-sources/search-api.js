import {searchResults} from "./fake-reports";


// Fake API Call
export const search = () => new Promise((resolve, reject) => {
    window.setTimeout(function () {
        resolve(searchResults);  // Yay! Everything went well!
    }, 250);
});