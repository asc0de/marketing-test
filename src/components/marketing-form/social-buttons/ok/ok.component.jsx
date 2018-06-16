import React, { Component } from "react";
import ShareButton from "../share-button/share-button.container";
import ShareButtonConstants from "../share-button/share-button.constants";
import { showOKModal } from "../social-buttons.helper";

class Ok extends Component {
    render() {
        return <ShareButton type={ShareButtonConstants.types.ODNOKLASSNIKI} onClick={showOKModal} />;
    }
}

export default Ok;
