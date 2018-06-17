import "whatwg-fetch";
const settings = require("../settings");

const makeRequest = (url, method, data = {}) => {
    const fetchParams = {
        mode: "cors",
        method: method,
        headers: {
            "Content-Type": "application/json"
        }
    };
    if (method !== "GET") {
        fetchParams.body = JSON.stringify(data);
    }

    return fetch(settings.serverUrl + url, fetchParams)
        .then(response => response.json())
        .catch(error => {
            throw error;
        });
};

export function get(url) {
    return makeRequest(url, "GET");
}

export function post(url, data) {
    return makeRequest(url, "POST", data);
}

export function put(url, data) {
    return makeRequest(url, "PUT", data);
}
