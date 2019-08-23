import React from "react";

import * as actions from "./actions";
import { connect } from "react-redux";
import { getVisibleWords } from "./reducers";

class GlossaryTable extends React.Component {
  handleSort(e) {
    e.preventDefault();
    this.props.dispatch(actions.sortBy('french', 'desc'));
  };

  handleRemoveSort(e) {
    e.preventDefault();
    this.props.dispatch(actions.sortBy('', ''));
  };

  handleFilter(e) {
    e.preventDefault();
    this.props.dispatch(actions.showDups(false));
  };

  handleRemoveFilter(e) {
    e.preventDefault();
    this.props.dispatch(actions.showDups(true));
  };

  render() {
    let { words } = this.props;
    let { filters } = this.props;
    // get the list of visible words based on the filters
    let visibleWords = getVisibleWords(words, filters);
    return (
      <div className="glossaryTable container-fluid">
        <div className="header">
          <h1>Glossary</h1>
        </div>
        <table className="table">
          <thead>
            <tr className="row">
                <th className="col">
                  <button type="button" className="btn btn-primary" onClick={this.handleSort.bind(this)}>Sort</button> 
                  <button type="button" className="btn btn-primary" onClick={this.handleRemoveSort.bind(this)}>RemoveSort</button> 
                  <button type="button" className="btn btn-primary" onClick={this.handleFilter.bind(this)}>Hide Dups</button> 
                  <button type="button" className="btn btn-primary" onClick={this.handleRemoveFilter.bind(this)}>Show Dups</button> 
                </th>
            </tr>
            <tr className="row">
              <th className="col">English</th>
              <th className="col">French</th>
            </tr>
          </thead>
          <tbody>
            {visibleWords.map((w, i) =>
              <tr className="row" key={i}>
                <td className="col">{w.english}</td>
                <td className="col">{w.french}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  let { words } = state;
  let { filters } = state;
  return {
    words,
    filters,
  };
};

export default connect(mapStateToProps)(GlossaryTable);
