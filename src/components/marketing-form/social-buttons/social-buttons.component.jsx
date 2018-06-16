import React, { Component } from "react";
import VK from "./vk/vk.component";
import Facebook from "./facebook/facebook.component";
import Twitter from "./twitter/twitter.component";
import Ok from "./ok/ok.component";
import "./social-buttons.component.css";

class SocialButtons extends Component {
    render() {
        return (
            <div className="social-buttons">
                <VK />
                <Facebook />
                <Twitter />
                <Ok />
            </div>
        );
    }
}

export default SocialButtons;
