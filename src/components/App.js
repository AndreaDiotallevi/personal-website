import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Navbar from "./Navbar";
// import PageTitle from "./PageTitle";
import Home from "./Home";
import ProjectList from "./ProjectList";
import About from "./About";
import Contact from "./Contact";
import Menu from "./Menu";
import Footer from "./Footer";
import BlogList from "./BlogList";
import BlogPost from "./BlogPost";

class App extends React.Component {
  state = {
    menuOpen: false,
  };

  handleMenuClick() {
    this.setState({ menuOpen: !this.state.menuOpen });
  }

  handleLinkClick() {
    this.setState({ menuOpen: false });
  }

  render() {
    return (
      <div
        className="app"
        style={this.state.menuOpen ? { position: "fixed" } : {}}
      >
        <BrowserRouter>
          <Route
            render={(routeProps) => (
              <Navbar
                {...routeProps}
                open={this.state.menuOpen}
                onClick={() => this.handleMenuClick()}
              />
            )}
          />
          <Route
            render={(routeProps) => (
              <Menu
                {...routeProps}
                open={this.state.menuOpen}
                onClick={() => this.handleLinkClick()}
              />
            )}
          />
          {/* <Route component={PageTitle} /> */}
          <Route path="/" exact component={Home} />
          <Route path="/portfolio" exact component={ProjectList} />
          <Route path="/about" exact component={About} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/blog" exact component={BlogList} />
          <Route path="/blog/:url" exact component={BlogPost} />
          <Route component={Footer} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
