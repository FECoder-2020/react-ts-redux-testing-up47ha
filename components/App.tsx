
import React from "react";
import { connect } from "react-redux";
import List from "./List";

import {getRandomFact} from './random-fact';
import { addArticle, setBusy, clearQuotes } from "../actions/index";

import {Spinner} from './spinner';

import '../style.css';

function mapDispatchToProps(dispatch) {
  return {
    addArticle: quote => dispatch(addArticle(quote)),
    setBusy: busy => dispatch(setBusy(busy)),
    clearList: () => dispatch(clearQuotes()),
  };
}

interface AppProps {
  busy: boolean;
  setBusy: (boolean)=>{};
  addArticle: (any)=>{};
  clearList: ()=>{}
}

class ConnectedApp extends React.Component<AppProps>{

constructor(props){
  super(props);
  this.handleChange = this.handleChange.bind(this);
  this.clearList = this.clearList.bind(this);
}

async handleChange(){

  this.props.setBusy(true);
  let q = await getRandomFact();
  this.props.addArticle( q );
  this.props.setBusy(false);
}

private clearList(){
  this.props.clearList();
}

render(){

return (
  <div>
    <button onClick={ this.handleChange } >Add random quote</button>
    <button onClick={ this.clearList } >Clear Quotes</button>
    <Spinner show={this.props.busy} color="#0067c780" />
    
    <h2>Quotes</h2>
      <List />
  </div>
);

}

}

const mapStateToProps = state  => {
  return { 
    quotes: state.quotes,
    busy: state.busy
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectedApp);