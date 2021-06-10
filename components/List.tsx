import React from "react";
import { connect } from "react-redux";
import { Quote } from '../constants/quote-def';

const mapStateToProps = state => {
  return {
    quotes: state.quotes,
    busy: state.busy
  };
};

// <div hidden={!this.props.busy}>Loading...</div>
const ConnectedList = ({ quotes }) => {
  if (!quotes.length) {
    return (
      <div>No quotes to show. Add some by clicking the button above.</div>
    );
  } else {

    return (
      <ul>
        {quotes.map(el => (
          <li key={el.id}>
            {el.quote} <br />
            <i>—{el.author || "Unknown"}</i>
          </li>
        ))}
      </ul>
    );
  }
}
const List = connect(mapStateToProps)(ConnectedList);
export default List;