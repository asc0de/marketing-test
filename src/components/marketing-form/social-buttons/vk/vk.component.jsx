import React, { Component } from "react";
import ShareButton from "../share-button/share-button.container";
import ShareButtonConstants from "../share-button/share-button.constants";
import { showVkModal } from "../social-buttons.helper";

class VK extends Component {
    render() {
        return <ShareButton type={ShareButtonConstants.types.VK} onClick={showVkModal} />;
    }
}

export default VK;
