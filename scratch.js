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

// // Every time the state changes, run getVisibleWords
// const unsubscribe = store.subscribe(() => {
//   const state = store.getState();
//   // console.log('In subscribe');
//   // console.log(state.words);
//   // console.log(state.filters);
//   const visibleWords = getVisibleWords(state.words, state.filters);
//   console.log(visibleWords);
// });


<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <title>Web Developer Test</title>
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
  <!-- <link href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" type="text/css" /> -->
</head>
<body>
  <div class="wrapper">
    <div id="content"></div>
  </div>
  <script src="js/app.js"></script>
  <!-- jQuery first, then Popper.js, then Bootstrap JS -->
  <!-- <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script> -->
  <!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script> -->
  <!-- <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script> -->
</body>
</html>

let path = require("path");
let webpack = require("webpack");

module.exports = {
  entry: {
    app: ["./src/entry.jsx"]
  },
  devtool: "inline-source-map",
  devServer: {
    contentBase: path.resolve(__dirname, "dist/"),
    hot: true,
    inline: true,
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        query: {
          presets: ["es2015", "react"],
          plugins: ["transform-object-rest-spread", "@babel/plugin-proposal-class-properties"]
        }
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, "dist/js/"),
    publicPath: "/js/",
    filename: "app.js"
  },
  resolve: {
    alias: {},
    extensions: [ "", ".js", ".jsx", ".json" ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ]
};


{
  "name": "web-developer-test",
  "version": "1.0.0",
  "scripts": {
    "server": "webpack-dev-server"
  },
  "devDependencies": {
    "@babel/plugin-proposal-class-properties": "^7.5.5",
    "babel": "^6.5.2",
    "babel-cli": "^6.18.0",
    "babel-core": "^6.26.3",
    "babel-loader": "^6.2.8",
    "babel-plugin-transform-object-rest-spread": "^6.26.0",
    "babel-preset-es2015": "^6.18.0",
    "babel-preset-react": "^6.16.0",
    "eslint": "^3.11.1",
    "eslint-plugin-react": "^6.7.1",
    "webpack": "^4.39.2",
    "webpack-dev-server": "^3.8.0"
  },
  "dependencies": {
    "react": "^15.4.1",
    "react-dom": "^15.4.1",
    "react-redux": "^4.4.6",
    "redux": "^3.6.0",
    "redux-logger": "^2.7.4"
  }
}
