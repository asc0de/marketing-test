import React, { Component } from "react";
import Logo from "./logo/logo.component";
import MarketingForm from "./marketing-form/marketing-form.container";
import bg from "./images/background.svg";
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
                <MarketingForm />
            </div>
        );
    }
}

export default App;
