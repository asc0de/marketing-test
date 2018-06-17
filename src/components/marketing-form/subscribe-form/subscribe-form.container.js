import { connect } from "react-redux";
import SubscribeForm from "./subscribe-form.component";
import { submitted, requestFailed } from "./subscribe-form.actions";

const mapStateToProps = state => {
    return {
        subscribeForm: state.subscribeForm,
        marketingForm: state.marketingForm
    };
};

const mapDispatchToProps = dispatch => {
    return {
        submitted: () => dispatch(submitted()),
        requestFailed: () => dispatch(requestFailed())
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SubscribeForm);
