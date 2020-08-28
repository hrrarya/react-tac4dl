import React from "react";
import "./style.css";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Contact from "./components/contact/Contact";
import ContactList from "./components/contact/ContactList";
import Navbar from './components/Navbar/Navbar';

export default function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
          <Route exact path="/" component={ContactList}/>
          <Route path="/create-contact" component={Contact}/>
      </Switch>
    </Router>
  );
}
