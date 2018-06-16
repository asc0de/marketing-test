import React, { Component } from "react";
import "./submit-button.component.css";

class SubmitButton extends Component {
    onClick(e) {
        e.preventDefault();
        this.props.clicked();
    }
    render() {
        return (
            <button type="submit" className="subscribe-form__submit-button" onClick={this.onClick.bind(this)} disabled={this.props.disabled}>
                {this.props.fetching ? <div className="subscribe-form__submit-button__loader" /> : "Отправить"}
            </button>
        );
    }
}

export default SubmitButton;
