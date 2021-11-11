import React, { Component } from "react";
import "./App.css";
import "./styles/button.scss";
import "./styles/selectmenu.scss";
import "./styles/validation.scss";
import Routing from "./components/routing/routing";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Routing />
      </div>
    );
  }
}

export default App;
