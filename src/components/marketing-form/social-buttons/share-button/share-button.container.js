import { connect } from "react-redux";
import { shared } from "./share-button.actions";
import ShareButton from "./share-button.component";

const mapStateToProps = state => {
    return {
        user: state.marketingForm
    };
};

const mapDispatchToProps = dispatch => {
    return {
        share: () => dispatch(shared())
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ShareButton);
