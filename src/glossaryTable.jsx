import React from "react";

import * as actions from "./actions";
import { connect } from "react-redux";
import { getVisibleWords } from "./reducers";

class GlossaryTable extends React.Component {
  handleUnsorted= (e) => {
    e.preventDefault();
    this.props.dispatch(actions.sortBy('', ''));
  };

  handleEngAsc = (e) => {
    e.preventDefault();
    this.props.dispatch(actions.sortBy('english', 'asc'));
  };

  handleEngDesc = (e) => {
    e.preventDefault();
    this.props.dispatch(actions.sortBy('english', 'desc'));
  };

  handleFrAsc = (e) => {
    e.preventDefault();
    this.props.dispatch(actions.sortBy('french', 'asc'));
  };

  handleFrDesc = (e) => {
    e.preventDefault();
    this.props.dispatch(actions.sortBy('french', 'desc'));
  };

  handleShowDups = (e) => {
    e.preventDefault();
    this.props.dispatch(actions.showDups(true));
  };

  handleHideDups = (e) => {
    e.preventDefault();
    this.props.dispatch(actions.showDups(false));
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
        <table className="table table-striped">
          <thead>
            <tr scope="row">
                <th scope="col">
                  <div className="btn-group btn-group-sm" role="group" aria-label="Sort Buttons">
                    <button type="button" className="btn btn-primary active" onClick={this.handleUnsorted}>Unsorted</button>
                    <button type="button" className="btn btn-primary" onClick={this.handleEngAsc}>English A-Z</button>
                    <button type="button" className="btn btn-primary" onClick={this.handleEngDesc}>English Z-A</button>
                    <button type="button" className="btn btn-primary" onClick={this.handleFrAsc}>French A-Z</button>
                    <button type="button" className="btn btn-primary" onClick={this.handleFrDesc}>French Z-A</button>
                  </div>
                </th>
                <th scope="col">  
                  <div className="btn-group btn-group-sm" role="group" aria-label="Filter Buttons">
                    <button type="button" className="btn btn-primary active" onClick={this.handleShowDups}>Show Duplicates</button>
                    <button type="button" className="btn btn-primary" onClick={this.handleHideDups}>Hide Duplicates</button>
                  </div>
                </th>
            </tr>
            <tr scope="row">
              <th scope="col">English</th>
              <th scope="col">French</th>
            </tr>
          </thead>
          <tbody>
            {visibleWords.map((w, i) =>
              <tr scope="row" key={i}>
                <td scope="col">{w.english}</td>
                <td scope="col">{w.french}</td>
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

// Not using mapDispatchToProps to shorthand calls to dispatching the various actions and then connecting it.

export default connect(mapStateToProps)(GlossaryTable);
