import { searchResults1 } from "./fake-data";


const scoreMe = (query, result) => {
    const matchables = Object.keys(query).filter(key => typeof query[key] !== "undefined" && query[key] !== null);
    return matchables.reduce((sum, matchable) => JSON.stringify((result[matchable] || "")).toLowerCase().includes(JSON.stringify(query[matchable]).toLowerCase()) ? sum + 1 : sum, 0);
};


const matchUs = (query, data) => {
    const foo = data
        .map(datum => ({
            score: scoreMe(query, datum),
            result: datum
        }))
        .sort((a, b) => b.score - a.score);
    return foo;
};


// Fake API Call
export const search = (query = "") => {
    return new Promise((resolve, reject) => {
        window.setTimeout(function () {
            const results = {
                vehicles: matchUs(query.vehicle, searchResults1.vehicles),
                subjects: matchUs(query.subject, searchResults1.subjects)
            };
            resolve(results);  // Yay! Everything went well!
        }, 250);
    });

};