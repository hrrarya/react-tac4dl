import React from "react";
import "./style.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Contact from "./components/contact/Contact";
import ContactList from "./components/contact/ContactList";
import Navbar from "./components/Navbar/Navbar";
import GroupList from "./components/group/GroupList";
import Group from "./components/group/Group";
import SingleGroup from "./components/group/singleGroup";
import SingleContact from "./components/contact/singleContact";
import EditContact from "./components/contact/editContact";
import EditGroup from "./components/group/editGroup";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={ContactList} />
        <Route path="/create-contact" component={Contact} />
        <Route path="/create-group" component={Group} />
        <Route exact path="/group-list" component={GroupList} />
        <Route path="/group-list/:id" component={SingleGroup} />
        <Route path="/contact-list/:id" component={SingleContact} />
        <Route path="/contact-edit/:id" component={EditContact} />
        <Route path="/group-edit/:id" component={EditGroup} />
      </Switch>
    </Router>
  );
}
