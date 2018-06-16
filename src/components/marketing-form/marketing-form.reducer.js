import { SHARED } from "./social-buttons/share-button/share-button.actions";

const initState = {
    shared: false,
    subscribed: false
};

export default function MarketingFormReducer(state = initState, action) {
    switch (action.type) {
        case SHARED: {
            return {
                ...state,
                shared: true
            };
        }
    }
    return state;
}
