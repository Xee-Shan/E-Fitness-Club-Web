import React from "react";
import ReactDOM from "react-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

import App from "./App";
// import { applyMiddleware, createStore } from "redux";
// import { Provider } from "react-redux";
// import logger from "redux-logger";
// import thunk from "redux-thunk";
// import Reducer from "./reducers/combineReducers";

// const middleware = [thunk, logger];
// const store = createStore(Reducer, applyMiddleware(...middleware));

ReactDOM.render(
    <App />,
  document.getElementById("root")
);
