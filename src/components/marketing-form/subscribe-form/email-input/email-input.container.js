import { connect } from "react-redux";
import EmailInput from "./email-input.component";
import { onEmailChange } from "./email-input.actions";

const mapDispatchToProps = dispatch => {
    return {
        onEmailChange: state => dispatch(onEmailChange(state))
    };
};

export default connect(
    null,
    mapDispatchToProps
)(EmailInput);
