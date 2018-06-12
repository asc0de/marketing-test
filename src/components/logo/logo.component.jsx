import React, { Component } from "react";
import logo from "../../assets/logo.svg";
import "./logo.component.css";

class Logo extends Component {
    render() {
        return (
            <a href="https://aviasales.ru">
                <img src={logo} className="app__logo" />
            </a>
        );
    }
}

export default Logo;
