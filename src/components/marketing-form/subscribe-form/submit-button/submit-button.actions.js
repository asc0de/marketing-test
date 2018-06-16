const CLICKED = "SUBMIT_BUTTON:CLICKED";

export { CLICKED };

export function clicked(state) {
    return { type: CLICKED, state };
}
