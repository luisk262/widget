import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import { Widget } from "./components/Widget";

const App = () => (
  <div className="container">
    <Widget></Widget>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
