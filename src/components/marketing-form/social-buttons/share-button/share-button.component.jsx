import React, { Component } from "react";
import classNames from "classnames";
import updateShared from "./share-button.service";
import "./share-button.component.css";

class ShareButton extends Component {
    onShareButtonClick() {
        updateShared(this.props.user);
        const currentModal = this.props.onClick();
        const modalInterval = window.setInterval(() => {
            if (currentModal == null || currentModal.closed) {
                window.clearInterval(modalInterval);
                this.props.share();
            }
        }, 1000);
    }
    render() {
        const btnClassName = classNames({
            [`share-button--${this.props.type}`]: true,
            "share-button": true
        });
        return <button className={btnClassName} onClick={this.onShareButtonClick.bind(this)} />;
    }
}

export default ShareButton;
