const USER_FETCHED = "MARKETING_FORM.USER_FETCHED";

export { USER_FETCHED };

export function userFetched(state) {
    return { type: USER_FETCHED, state };
}
