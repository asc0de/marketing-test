import { connect } from "react-redux";
import MarketingForm from "./marketing-form.component";

const mapStateToProps = state => {
    return {
        marketingForm: state.marketingForm
    };
};

export default connect(mapStateToProps)(MarketingForm);
