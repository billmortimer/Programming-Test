import React from "react";

import * as actions from "./actions";
import { connect } from "react-redux";

class GlossaryTable extends React.Component {
  render() {
    let { words } = this.props;
    return (
      <div className="glossaryTable">
        <div className="header">
          <h1>Glossary</h1>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th>English</th>
              <th>French</th>
            </tr>
          </thead>
          <tbody>
            {words.map((w, i) =>
              <tr key={i}>
                <td>{w.english}</td>
                <td>french</td>
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
  return {
    words,
  };
};

export default connect(mapStateToProps)(GlossaryTable);
