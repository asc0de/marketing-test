import React, { Component } from "react";
import logo from "../assets/logo.svg";
import "./logo.component.css";

class Logo extends Component {
    render() {
        return <img src={logo} className="logo" />;
    }
}

export default Logo;
