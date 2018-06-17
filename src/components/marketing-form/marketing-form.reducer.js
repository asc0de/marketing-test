import { SHARED } from "./social-buttons/share-button/share-button.actions";
import { SUBMITTED } from "./subscribe-form/subscribe-form.actions";
import { USER_FETCHED } from "./marketing-from.actions";

const initState = {
    id: 1,
    shared: false,
    email: "",
    fetched: false
};

export default function MarketingFormReducer(state = initState, action) {
    switch (action.type) {
        case SHARED: {
            return {
                ...state,
                shared: true
            };
        }
        case SUBMITTED: {
            return {
                ...state,
                email: action.state
            };
        }
        case USER_FETCHED: {
            return {
                ...state,
                id: action.state.id,
                shared: action.state.shared,
                email: action.state.email,
                fetched: true
            };
        }
    }
    return state;
}
