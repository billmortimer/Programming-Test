import SORT_BY_ENGLISH from "./actions";
import HIDE_DUPLICATES from "./actions";

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
    // the current obj, then the string already exists. So we only allow entries where the index is the current position
    return { words: words.filter((obj, pos, arr) => {
      return (arr.map(mapObj => mapObj.french).indexOf(obj.french) === pos)
    })};
  };

  return state;
};

export default reducer;

// Here's a function to removeDuplicates based on a certain property
// function removeDuplicates(myArr, prop) {
//   return myArr.filter((obj, pos, arr) => {
//       return arr.map(mapObj => mapObj[prop]).indexOf(obj[prop]) === pos;
//   });
// }
// let newWords = removeDuplicates(words, "french");
// console.log(newWords);

// NOTE: Don't use an Array.from(new Set(...)) to remove duplicates because putting the .french strings into the set sorts them automatically
