import { connect } from "react-redux";
import { shared } from "./share-button.actions";
import { userChanged } from "../../../app.actions";
import ShareButton from "./share-button.component";

const mapStateToProps = state => {
    return {
        user: state.marketingForm
    };
};

const mapDispatchToProps = dispatch => {
    return {
        share: () => dispatch(shared()),
        userChanged: user => dispatch(userChanged(user))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ShareButton);
