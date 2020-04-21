import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./Navbar";
import PageTitle from "./PageTitle";
import Home from "./Home";
import ProjectList from "./ProjectList";
import Contact from "./Contact";

const App = () => {
  return (
    <div className="app-component">
      <BrowserRouter>
        <Route component={Navbar}></Route>
        <Route component={PageTitle}></Route>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/dev" component={ProjectList}></Route>
        <Route exact path="/contact" component={Contact}></Route>
      </BrowserRouter>
    </div>
  );
};

export default App;
