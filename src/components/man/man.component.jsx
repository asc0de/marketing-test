import React, { Component } from "react";
import man from "./images/man.svg";
import "./man.component.css";

const manStyle = {
    backgroundImage: `url(${man})`
};

class Man extends Component {
    render() {
        return (
            <div className="man">
                <div className="man__body" style={manStyle}>
                    <div className="man__text-block">
                        <div className="man__text-block-item">Выборы</div>
                        <div className="man__text-block-item">Путешествие</div>
                        <div className="man__text-block-item">Близко</div>
                    </div>
                </div>
                <div className="man__ground" />
            </div>
        );
    }
}

export default Man;
