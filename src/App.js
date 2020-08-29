import React from "react";
import "./style.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Contact from "./components/contact/Contact";
import ContactList from "./components/contact/ContactList";
import Navbar from "./components/Navbar/Navbar";
import GroupList from "./components/group/GroupList";
import Group from "./components/group/Group";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={ContactList} />
        <Route path="/create-contact" component={Contact} />
        <Route path="/create-group" component={Group} />
        <Route path="/group-list" component={GroupList} />
      </Switch>
    </Router>
  );
}
