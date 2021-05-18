import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
// import Discover from "./pages/Discover";
// import About from "./pages/About";
// import Search from "./pages/Search";
import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Route exact path="/">
          <Redirect to="/about" />
        </Route>
        <Route exact path="/about">
          {/* <About /> */}
        </Route>
        <Route exact path="/discover">
          {/* <Discover /> */}
        </Route>
        <Route path="/search">
          {/* <Search /> */}
        </Route>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
