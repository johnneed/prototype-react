import { searchResults2 } from "./fake-data";


// const scoreMe = (query, result, blacklist = []) => {
//     const matchables = Object
//         .keys(query)
//         .filter(key => !blacklist.includes(key))
//         .filter(key => typeof query[key] !== "undefined" && query[key] !== null);
//     return matchables.reduce((sum, matchable) => JSON.stringify((result[matchable] || "")).toLowerCase().includes(JSON.stringify(query[matchable]).toLowerCase()) ? sum + 1 : sum, 0);
// };
//
//
// const matchUs = (query, data, blacklist = []) => {
//     const foo = data
//         .map(datum => ({
//             score: scoreMe(query, datum, blacklist),
//             result: datum
//         }))
//         .sort((a, b) => b.score - a.score);
//     return foo;
// };

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
    const blacklist = ["created", "updated", "id"];

    return new Promise((resolve, reject) => {
        window.setTimeout(function () {
            const results = {
                vehicles: matchUs(query.vehicle, searchResults2.vehicles, blacklist),
                subjects: matchUs(query.subject, searchResults2.subjects, blacklist)
            };
            resolve(results );  // Yay! Everything went well!
        }, 250);
    });

};