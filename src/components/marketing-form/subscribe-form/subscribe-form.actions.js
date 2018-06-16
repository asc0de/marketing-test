const SUBMITTED = "SUBSCRIBE_FORM:SUBMITTED";
const REQUEST_FAILED = "SUBSCRIBE_FORM:REQUEST_FAILED";

export { SUBMITTED, REQUEST_FAILED };

export function submitted(state) {
    return { type: SUBMITTED, state };
}

export function requestFailed(state) {
    return { type: REQUEST_FAILED, state };
}
