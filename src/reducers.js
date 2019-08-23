import { SORT_BY, SHOW_DUPS, CLEAR } from  "./actions";

import { defaultFilters, words } from "./data";

let wordsReducer = (state = words, action) => {
  return state;
};

let filterReducer = (state = defaultFilters, action) => {
  switch (action.type) {
    case SORT_BY:
        return {
          ...state,
          sortKey: action.sortKey,
          sortOrder: action.sortOrder,
        };
    case SHOW_DUPS:
      return {
        ...state,
        showDuplicates: action.showDuplicates,
      }
    case 'CLEAR':
        return {
          ...state,
          sortKey: action.defaultFilter.sortKey,
          sortOrder: action.defaultFilter.sortOrder,
          showDuplicates: action.defaultFilter.showDuplicates,
        };
    default:
        return state;
  }
}

// This function for getting a list of visible words is located here because it is related to the filterReducer
// Called during the render method of glossaryTable
const getVisibleWords = (words, { sortKey, sortOrder, showDuplicates }) => {
  // filter first if needed
  let filteredWords;
  if (showDuplicates) {
    filteredWords = words.slice();
  } else { //hide duplicates
    filteredWords = words.filter((word, pos, arr) => {
      return (arr.map(mapObj => mapObj.french).indexOf(word.french) === pos);
    });
  };
  // then sort if needed
  if (sortKey !== '') {
    filteredWords = filteredWords.sort((word1, word2) => {
      if (sortKey === 'english') {
        //sort by english and use sortOrder to sort ascending or descending
        return (word1.english.localeCompare(word2.english, 'en', {sensitivity: 'variant'})) * (sortOrder === 'asc' ? 1 : -1);
      } else if (sortKey === 'french') {
        //sort by french and use sortOrder to sort ascending or descending
        return (word1.french.localeCompare(word2.french, 'fr', {sensitivity: 'variant'})) * (sortOrder === 'asc' ? 1 : -1);
      };
    });
  }
  return filteredWords;
}

export { wordsReducer, filterReducer, getVisibleWords };
