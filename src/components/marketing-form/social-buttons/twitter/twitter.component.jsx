import React, { Component } from "react";
import ShareButton from "../share-button/share-button.container";
import ShareButtonConstants from "../share-button/share-button.constants";
import { showTwitterModal } from "../social-buttons.helper";

class Twitter extends Component {
    render() {
        return <ShareButton type={ShareButtonConstants.types.TWITTER} onClick={showTwitterModal} />;
    }
}

export default Twitter;
