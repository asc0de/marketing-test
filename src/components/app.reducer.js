import { USER_CHANGED } from "./app.actions";

const initState = {
    isFilled: false
};

export default function AppReducer(state = initState, action) {
    switch (action.type) {
        case USER_CHANGED: {
            return {
                isFilled: action.state.id && action.state.shared && action.state.email
            };
        }
    }
    return state;
}
