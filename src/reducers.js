import { combineReducers } from "redux";

import marketingFormReducer from "./components/marketing-form/marketing-form.reducer";

export default combineReducers({
    marketingForm: marketingFormReducer
});
