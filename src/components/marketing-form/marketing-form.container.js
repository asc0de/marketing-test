import { connect } from "react-redux";
import MarketingForm from "./marketing-form.component";
import { userFetched } from "./marketing-from.actions";
import { userChanged } from "../app.actions";

const mapStateToProps = state => {
    return {
        marketingForm: state.marketingForm
    };
};

const mapDispatchToProps = dispatch => {
    return {
        userFetched: user => dispatch(userFetched(user)),
        userChanged: user => dispatch(userChanged(user))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MarketingForm);
