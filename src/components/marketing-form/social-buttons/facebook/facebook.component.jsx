import React, { Component } from "react";
import ShareButton from "../share-button/share-button.container";
import ShareButtonConstants from "../share-button/share-button.constants";
import { showFacebookModal } from "../social-buttons.helper";

class Facebook extends Component {
    render() {
        return <ShareButton type={ShareButtonConstants.types.FACEBOOK} onClick={showFacebookModal} />;
    }
}

export default Facebook;
