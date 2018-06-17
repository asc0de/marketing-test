import React, { Component } from "react";
import Section from "./section/section.component";
import SocialButtons from "./social-buttons/social-buttons.component";
import SubscribeForm from "./subscribe-form/subscribe-form.container";
import fetchUser from "./marketing-form.service";
import classNames from "classnames";
import "./marketing-form.component.css";

class MarketingForm extends Component {
    componentDidMount() {
        fetchUser(this.props.marketingForm.id).then(user => {
            this.props.userFetched(user);
        });
    }
    render() {
        const formClassName = classNames({
            "marketing-form": true,
            "marketing-form--fetched": this.props.marketingForm.fetched
        });
        return (
            <div className={formClassName}>
                <h3 className="marketing-form__title">Чтобы выиграть путешествие</h3>
                <Section label={"Поделись с друзьями:"} done={this.props.marketingForm.shared}>
                    <SocialButtons />
                </Section>
                <Section label={"Оставь почту:"} done={!!this.props.marketingForm.email}>
                    <SubscribeForm />
                </Section>
            </div>
        );
    }
}

export default MarketingForm;
