import React from "react";
import ReactDOM from "react-dom";
import createLogger from "redux-logger";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";

import GlossaryTable from "./glossaryTable";
import { wordsReducer, filterReducer } from "./reducers";
import { defaultFilters, words } from "./data";
import * as actions from "./actions";

let initialState = {
  words: words,
  filters: defaultFilters,
};

let store = createStore(
  combineReducers({
    words: wordsReducer,
    filters: filterReducer,
  }),
  initialState,
  compose(
    applyMiddleware(createLogger())
  )
);

const unsubscribe = store.subscribe(() => {
  //console.log(store.getState());
});

// Testing
// store.dispatch(actions.clear());
// console.log('ShowDups: true');
// store.dispatch(actions.showDups(true));
// store.dispatch(actions.sortBy('english', 'asc'));
// store.dispatch(actions.sortBy('french', 'asc'));
// store.dispatch(actions.sortBy('english', 'desc'));
// store.dispatch(actions.sortBy('french', 'desc'));
// console.log('ShowDups: false');
// store.dispatch(actions.showDups(false));
// store.dispatch(actions.sortBy('english', 'asc'));
// store.dispatch(actions.sortBy('french', 'asc'));
// store.dispatch(actions.sortBy('english', 'desc'));
// store.dispatch(actions.sortBy('french', 'desc'));

unsubscribe();

ReactDOM.render((
  <Provider store={store}>
    <div className="app">
      <GlossaryTable/>
    </div>
  </Provider>
), document.getElementById("content"));
