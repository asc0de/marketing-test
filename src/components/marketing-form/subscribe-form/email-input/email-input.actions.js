const EMAIL_ON_CHANGE = "EMAIL_INPUT.ON_CHANGE";
export { EMAIL_ON_CHANGE };

export function onEmailChange(state) {
    return { type: EMAIL_ON_CHANGE, state };
}
