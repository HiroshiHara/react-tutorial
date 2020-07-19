import { method, Form } from "./component/sample";
import { culc } from "./component/culc";
import React from "react";
import ReactDOM from "react-dom";
import "./style.css";

method("es7");
culc(3, 4);

ReactDOM.render(<Form />, document.getElementById("app"));
