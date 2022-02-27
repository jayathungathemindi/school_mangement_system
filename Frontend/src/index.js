import React from "react";
import ReactDOM from "react-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
//import Card from './Cads/CardUI';
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import store from "./Store";
import { Provider } from "react-redux";
ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById("root")
);
