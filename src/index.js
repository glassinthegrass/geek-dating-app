import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./ducks/store";
import { HashRouter, BrowserRouter } from "react-router-dom";
import { createBrowserHistory } from "history";
const customHistory = createBrowserHistory();
const Router =
  process.env.NODE_ENV === "development" ? HashRouter : BrowserRouter;

  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <Router history={customHistory}>
          <App />
        </Router>
      </Provider>
    </React.StrictMode>,
    document.getElementById("root")
  );  

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
