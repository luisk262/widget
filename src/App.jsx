import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import { Widget } from "./components/Widget";

const App = () => (
  <div className="container" id="floating_widget_b">
    <Widget></Widget>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
