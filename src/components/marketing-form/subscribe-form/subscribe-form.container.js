import { connect } from "react-redux";
import SubscribeForm from "./subscribe-form.component";
import { submitted, requestFailed } from "./subscribe-form.actions";
import { userChanged } from "../../app.actions";

const mapStateToProps = state => {
    return {
        subscribeForm: state.subscribeForm,
        marketingForm: state.marketingForm
    };
};

const mapDispatchToProps = dispatch => {
    return {
        submitted: email => dispatch(submitted(email)),
        requestFailed: () => dispatch(requestFailed()),
        userChanged: user => dispatch(userChanged(user))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SubscribeForm);
