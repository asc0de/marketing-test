import { combineReducers } from "redux";

import marketingFormReducer from "./components/marketing-form/marketing-form.reducer";
import subscribeFormReducer from "./components/marketing-form/subscribe-form/subscribe-form.reducer";

export default combineReducers({
    marketingForm: marketingFormReducer,
    subscribeForm: subscribeFormReducer
});
