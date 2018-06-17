import React, { Component } from "react";
import EmailInput from "./email-input/email-input.container";
import SubmitButton from "./submit-button/submit-button.container";
import sendSubscription from "./subsribe-form.service";
import "./subscribe-form.component.css";

class SubscribeForm extends Component {
    componentDidUpdate() {
        if (this.props.subscribeForm.isFetching) {
            sendSubscription(this.props.marketingForm, this.props.subscribeForm.email)
                .then(() => {
                    this.props.submitted(this.props.subscribeForm.email);
                })
                .catch(() => {
                    this.props.requestFailed();
                });
        }
    }
    render() {
        return (
            <form name="subscribeForm" className="subscribe-form">
                <EmailInput value={this.props.subscribeForm.email} />
                {this.props.subscribeForm.isSubmitDisplayed ? (
                    <SubmitButton disabled={this.props.subscribeForm.isSubmitDisabled} fetching={this.props.subscribeForm.isFetching} />
                ) : null}
            </form>
        );
    }
}

export default SubscribeForm;
