const USER_CHANGED = "APP.USER_CHANGED";

export { USER_CHANGED };

export function userChanged(state) {
    return { type: USER_CHANGED, state };
}
