import React from "react";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Service from "./Services";
import ReactProjects from "../src/React-Projects/ReactProjects";
import ClickCounter from "../src/React-Projects/ClickCounter";
import Time from "../src/React-Projects/Time";
import DigitalClock from "../src/React-Projects/DigitalClock";
import OnClickApp from "../src/React-Projects/OnClickApp";
import ToDoApp from "../src/React-Projects/To-Do-List/ToDoApp";
import IncDec from "../src/React-Projects/IncDec";
import ToDoListMUI from "../src/React-Projects/To-Do-List-MUI/ToDoListMUI";
import Accordionapp from "../src/React-Projects/accordion/accordionapp";

import Navbar from "./NavBar";
import Footer from "./Footer";

import { Route, Switch, Redirect } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "./index.css";
import "../src/React-Projects/To-Do-List/ToDoList.css";
import "../src/React-Projects/To-Do-List-MUI/ToDoListMUI.css";

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/services" component={Service} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/react-projects" component={ReactProjects} />
        <Route
          exact
          path="/react-projects/clickcounter"
          component={ClickCounter}
        />
        <Route exact path="/react-projects/time" component={Time} />
        <Route
          exact
          path="/react-projects/digitalclock"
          component={DigitalClock}
        />
        <Route exact path="/react-projects/onclickapp" component={OnClickApp} />
        <Route exact path="/react-projects/todolist" component={ToDoApp} />
        <Route exact path="/react-projects/incdec" component={IncDec} />
        <Route
          exact
          path="/react-projects/todolistmui"
          component={ToDoListMUI}
        />
        <Route
          exact
          path="/react-projects/accordion"
          component={Accordionapp}
        />

        <Redirect to="/" />
      </Switch>
      <Footer />
    </>
  );
};
export default App;
