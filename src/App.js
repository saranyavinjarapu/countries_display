import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import LoginForm from "./components/Forms/LoginForm";
import SignupForm from "./components/Forms/SignupForm";
import Countries from "./components/Countries/Countries";

function App() {
  return (
    <div className="main-container">
      <ToastContainer />
      <Header />
      <Router>
        <div>
          <Navigation />
          <div className="main-container">
            <Switch>
              <Route exact path="/" component={LoginForm} />
              <Route exact path="/login" component={LoginForm} />
              <Route exact path="/signup" component={SignupForm} />
              <Route exact path="/countries" component={Countries} />
            </Switch>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
