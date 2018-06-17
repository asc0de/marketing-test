import { connect } from "react-redux";
import App from "./app";

const mapStateToProps = state => {
    return {
        isFilled: state.app.isFilled
    };
};

export default connect(mapStateToProps)(App);
