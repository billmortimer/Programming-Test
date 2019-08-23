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


// Every time the state changes, run getVisableWords
const unsubscribe = store.subscribe(() => {
  const state = store.getState();
  // console.log('In subscribe');
  // console.log(state.words);
  // console.log(state.filters);
  const visibleWords = getVisibleWords(state.words, state.filters);
  console.log(visibleWords);
});

const getVisibleWords = (words, { sortKey, sortOrder, showDuplicates }) => {
  // filter first if needed
  let filteredWords;
  if (showDuplicates) {
    console.log('In show duplicates');
    filteredWords = words.slice();  // Do I need to slice this?
  } else { //hide duplicates
    console.log('In hide duplicates');
    filteredWords = words.filter((word, pos, arr) => {
      return (arr.map(mapObj => mapObj.french).indexOf(word.french) === pos);
    });
  };
  // then sort if needed
  if (sortKey !== '') {
    console.log(sortKey);
    console.log(sortOrder);
    filteredWords = filteredWords.sort((word1, word2) => {
      if (sortKey === 'english') {
        //console.log((word1.english.localeCompare(word2.english, 'en', {sensitivity: 'variant'})) * (sortOrder === 'asc' ? 1 : -1));
        return (word1.english.localeCompare(word2.english, 'en', {sensitivity: 'variant'})) * (sortOrder === 'asc' ? 1 : -1);
      } else if (sortKey === 'french') {
        //console.log((word1.french.localeCompare(word2.french, 'fr', {sensitivity: 'variant'})) * (sortOrder === 'asc' ? 1 : -1));
        return (word1.french.localeCompare(word2.french, 'fr', {sensitivity: 'variant'})) * (sortOrder === 'asc' ? 1 : -1);
      };
    });
  }

  return filteredWords;
}

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
