import { EMAIL_ON_CHANGE } from "./email-input/email-input.actions";
import { CLICKED } from "./submit-button/submit-button.actions";
import { SUBMITTED, REQUEST_FAILED } from "./subscribe-form.actions";

const initState = {
    email: "",
    isFetching: false,
    isSubmitDisabled: true,
    isSubmitDisplayed: true
};

export default function subscribeReducer(state = initState, action) {
    switch (action.type) {
        case EMAIL_ON_CHANGE: {
            return {
                ...state,
                email: action.state.value,
                isSubmitDisabled: !action.state.isValid
            };
        }
        case CLICKED: {
            return {
                ...state,
                isFetching: true,
                isSubmitDisabled: true
            };
        }
        case SUBMITTED: {
            return {
                ...state,
                isFetching: false,
                isSubmitDisplayed: false
            };
        }
        case REQUEST_FAILED: {
            return {
                ...state,
                isFetching: false,
                isSubmitDisabled: false,
                isSubmitDisplayed: true
            };
        }
    }
    return state;
}
