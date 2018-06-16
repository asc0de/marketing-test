import React, { Component } from "react";
import classNames from "classnames";
import "./section.component.css";

class Section extends Component {
    render() {
        const sectionClassName = classNames({
            "marketing-form__section--done": this.props.done,
            "marketing-form__section": true
        });
        return (
            <div className={sectionClassName}>
                <span className="marketing-form__section__label">{this.props.label}</span>
                <div className="marketing-form__section__content">
                    <fieldset disabled={this.props.done}>{this.props.children}</fieldset>
                </div>
            </div>
        );
    }
}

export default Section;
