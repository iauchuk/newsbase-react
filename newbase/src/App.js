import { Component } from "react";
import "./App.css";
import Routing from "./components/routing/routing";
import 'firebase/firestore';

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
