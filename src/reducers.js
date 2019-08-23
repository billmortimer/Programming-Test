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

export { wordsReducer, filterReducer };
