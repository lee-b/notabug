/* eslint import/no-webpack-loader-syntax: off */
import "core-js";
import "babel-polyfill";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "snew-classic-ui/static/css/minimal.css";
import "react-tippy/dist/tippy.css";
import "styles/index.css";
import { App } from "App";
import { unregister } from "utils/registerServiceWorker";

try {
  ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.body);
} catch (e) {
  console.error(e.stack || e);
  localStorage.clear();
  ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.body);
}

unregister();
