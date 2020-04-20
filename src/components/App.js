import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./Navbar";
import ProjectList from "./ProjectList";
import About from "./About";

const App = () => {
  return (
    <div className="app-component">
      <BrowserRouter>
        <Route component={Navbar}></Route>
        <Route exact path="/" component={ProjectList}></Route>
        <Route exact path="/about" component={About}></Route>
      </BrowserRouter>
    </div>
  );
};

export default App;
