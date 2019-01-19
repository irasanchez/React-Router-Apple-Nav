import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import NavWrapper from "./Components/NavWrapper";

class App extends Component {
  constructor() {
    this.state = {
      categories: [
        { title: "Home", icon: `` },
        { title: "Mac", icon: `` },
        { title: "iPad", icon: `` },
        { title: "iPhone", icon: `` },
        { title: "Watch", icon: `` },
        { title: "TV", icon: `` },
        { title: "Music", icon: `` },
        { title: "Support", icon: `` },
        { title: "Search", icon: `` },
        { title: "Shop", icon: `` }
      ]
    };
  }
  render() {
    return (
      <div className="App">
        <NavWrapper />
      </div>
    );
  }
}

export default App;
