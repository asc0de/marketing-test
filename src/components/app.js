import React, { Component } from "react";
import Logo from "./logo/logo.component";
import bg from "../assets/background.svg";
import "./app.css";

const style = {
    backgroundImage: `url(${bg})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
};

class App extends Component {
    render() {
        return (
            <div className="app" style={style}>
                <Logo />
            </div>
        );
    }
}

export default App;
