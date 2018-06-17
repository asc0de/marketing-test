import React, { Component } from "react";
import Logo from "./logo/logo.component";
import MarketingForm from "./marketing-form/marketing-form.container";
import Man from "./man/man.component";
import bg from "./images/background.svg";
import "./app.css";

const style = {
    backgroundImage: `url(${bg})`
};

class App extends Component {
    render() {
        return (
            <div className="app" style={style}>
                <Logo />
                {this.props.isFilled ? <Man /> : <MarketingForm />}
            </div>
        );
    }
}

export default App;
