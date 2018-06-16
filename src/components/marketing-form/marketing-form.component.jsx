import React, { Component } from "react";
import Section from "./section/section.component";
import SocialButtons from "./social-buttons/social-buttons.component";
import "./marketing-form.component.css";

class MarketingForm extends Component {
    render() {
        return (
            <div className="marketing-form">
                <h3 className="marketing-form__title">Чтобы выиграть путешествие</h3>
                <Section label={"Поделись с друзьями"} done={this.props.marketingForm.shared}>
                    <SocialButtons />
                </Section>
                <Section label={"Оставь почту"} />
            </div>
        );
    }
}

export default MarketingForm;
