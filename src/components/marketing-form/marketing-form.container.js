import { connect } from "react-redux";
import MarketingForm from "./marketing-form.component";
import { userFetched } from "./marketing-from.actions";

const mapStateToProps = state => {
    return {
        marketingForm: state.marketingForm
    };
};

const mapDispatchToProps = dispatch => {
    return {
        userFetched: user => dispatch(userFetched(user))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MarketingForm);
