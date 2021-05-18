import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Work from "./pages/Work";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Route exact path="/">
          <Redirect to="/about" />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route path="/work">
          <Work />
        </Route>
        <Contact />
      </div>
    </Router>
  );
}

export default App;
