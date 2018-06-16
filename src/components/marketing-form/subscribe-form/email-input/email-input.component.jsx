import React, { Component } from "react";
import "./email-input.component.css";

class EmailInput extends Component {
    onChange(e) {
        this.props.onEmailChange({ value: e.target.value, isValid: e.target.checkValidity() });
    }
    render() {
        return <input type="email" className="subscribe-form__email-input" value={this.props.value} onChange={this.onChange.bind(this)} tabIndex={1} />;
    }
}

export default EmailInput;
