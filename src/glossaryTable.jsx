import React from "react";

import * as actions from "./actions";
import { connect } from "react-redux";

class GlossaryTable extends React.Component {
  render() {
    let { words } = this.props;
    let { filters } = this.props;
    console.log('In GlossaryTable')
    console.log(words);
    console.log(filters);
    return (
      <div className="glossaryTable container-fluid">
        <div className="header">
          <h1>Glossary</h1>
        </div>
        <table className="table">
          <thead>
          <tr className="row">
              <th className="col"><button type="button" className="btn btn-primary">Sort</button></th>
              <th className="col"><button type="button" className="btn btn-primary">Hide Duplicates</button></th>
            </tr>
            <tr className="row">
              <th className="col">English</th>
              <th className="col">French</th>
            </tr>
          </thead>
          <tbody>
            {words.map((w, i) =>
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

// Modify this?
let mapStateToProps = (state) => {
  let { words } = state;
  let { filters } = state;
  return {
    words,
    filters,
  };
};

export default connect(mapStateToProps)(GlossaryTable);
