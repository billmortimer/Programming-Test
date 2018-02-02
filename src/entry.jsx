import React from "react";
import ReactDOM from "react-dom";
import createLogger from "redux-logger";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";

import GlossaryTable from "./glossaryTable";
import reducer from "./reducers";
import words from "./data";

let initialState = {
  words,
};

let store = createStore(
  reducer,
  initialState,
  compose(
    applyMiddleware(createLogger())
  )
);

ReactDOM.render((
  <Provider store={store}>
    <div className="app">
      <GlossaryTable/>
    </div>
  </Provider>
), document.getElementById("content"));
