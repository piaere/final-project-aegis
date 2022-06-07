import React from "react";
import ReactDOM from "react-dom";
import "./base.css";
import App from "./App";
import { Provider } from "./Context";

const root = document.getElementById("root");
ReactDOM.render(
  <Provider>
    <App />
  </Provider>,

  root
);
