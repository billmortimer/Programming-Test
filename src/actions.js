import { defaultFilters } from "./data";
// List of Actions

// Usually these would go in an actions_constants file
// Show Duplicates
const SHOW_DUPS = 'SHOW_DUPS';
// Sort
const SORT_BY = 'SORT_BY';
// Clear - Reset to Defaults
const CLEAR = 'CLEAR';
// Sort Orders
const SORT_ASC = 'asc';
const SORT_DESC = 'desc';

// Action Creators
// No current actions on the words list, but this is where we would add or delete words from the list

// Sort the list by a key and a direction
const sortBy = (sortKey, sortOrder) => {
  return { 
    type: SORT_BY,
    sortKey: sortKey,
    sortOrder: sortOrder,
  }
};

// Show or Hide Duplicates
const showDups = (showDuplicates) => {
  return { 
    type: SHOW_DUPS,
    showDuplicates: showDuplicates,
  }
};

// Clear and reset - for use in testing
const clear = () => ({
  type: CLEAR,
  defaultFilter: defaultFilters,
});


export { SORT_BY, SORT_ASC, SORT_DESC, SHOW_DUPS, CLEAR, sortBy, showDups, clear };