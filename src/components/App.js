import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./Navbar";
import ProjectList from "./ProjectList";

const App = () => {
  return (
    <div className="app-container">
      <BrowserRouter>
        <Route component={Navbar}></Route>
        <Route path="/" component={ProjectList}></Route>
      </BrowserRouter>
    </div>
  );
};

export default App;
