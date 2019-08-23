// Old contents of reducers.js

import { SORT_BY_ENGLISH, HIDE_DUPLICATES } from  "./actions";

// Small program, and each action operates directly on the same slice of state, so no need to create
// seperate reducers and use combineReducers
let reducer = (state, action) => {
  if (action.type === SORT_BY_ENGLISH) {
    let { words } = state;
    // Use slice() to create a copy of words and then sort the new array by comparing the english entries using localeCompare()
    // ToDo: add check for falsey values for english entries - right now we're assuming each entry has a valid string in .english
    return { words: words.slice().sort((a,b) => a.english.localeCompare(b.english))};
  };
  if (action.type === HIDE_DUPLICATES) {
    let { words } = state;
    // Duplicates are defined as having the .french strings exactly equal
    // Use .map to map the current array objects to an array of just the french strings
    // Then use .filter and .indexOf to see if the current object's .french string exists in the array created by .map
    // This will find the index of the first occurance of that string in the array. If the index is not the same as the index of 
    // the current obj, then the string already exists and false is returned and the entry is not added to the new state.
    return { words: words.filter((obj, pos, arr) => {
      return (arr.map(mapObj => mapObj.french).indexOf(obj.french) === pos)
    })};
  };
  // return current state by default
  return state;
};

export default reducer;

// Here's a function to removeDuplicates based on a certain property
// This could be used in the reducer to hide duplicates based on other keys
// function removeDuplicates(myArr, prop) {
//   return myArr.filter((obj, pos, arr) => {
//       return arr.map(mapObj => mapObj[prop]).indexOf(obj[prop]) === pos;
//   });
// }
// let newWords = removeDuplicates(words, "french");
// console.log(newWords);

// NOTE: Don't use an Array.from(new Set(...)) to remove duplicates because putting the .french strings into the set sorts them automatically


return words.filter(word => {
  const textMatch =
      book.title.toLowerCase().includes(text.toLowerCase()) ||
      book.description.toLowerCase().includes(text.toLowerCase());

  const startYearMatch = typeof startYear !== 'number' || startYear <= book.published;
  const endYearMatch = typeof endYear !== 'number' || book.published <= endYear;

  if (showDuplicates) {

  } else {

  }
}).sort((word1, word2) => {
  if (sortKey === 'english') {
      return word1.english.localeCompare(word2.english, 'en', {sensitivity: 'variant'});
  } else if (sortKey === 'french') {
      return word1.french.localeCompare(word2.french, 'fr', {sensitivity: 'variant'});
  } else {  // sortKey === ''
    return false;
  }
});