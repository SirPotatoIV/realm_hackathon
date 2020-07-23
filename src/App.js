// React
import React from "react";
// React Router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// Realm
import * as RealmWeb from "realm-web";

// Components
import Home from "./routes/Home";
import About from "./routes/About";
import Users from "./routes/Users";
import Navbar from "./components/Navbar";

// Styling
import "./App.css";

// Realm App Initilization
const realmApp = new RealmWeb.App({ id: process.env.REACT_APP_REALM_ID });

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/">
            <Users />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
