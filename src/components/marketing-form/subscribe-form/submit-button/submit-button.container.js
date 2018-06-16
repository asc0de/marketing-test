import { connect } from "react-redux";
import SubmitButton from "./submit-button.component";
import { clicked } from "./submit-button.actions";

const mapDispatchToProps = dispatch => {
    return {
        clicked: () => dispatch(clicked())
    };
};

export default connect(
    null,
    mapDispatchToProps
)(SubmitButton);
