import React, { Component } from 'react';
import times from 'lodash/times';
import glamorous from 'glamorous';
import ReactProgressiveList from './ReactProgressiveList';
import './App.css';

const Div = glamorous.div({
  height: 50
});

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> oh hi React Progressive List </h1>
        <ReactProgressiveList
          itemRenderer={() => <Div> hi </Div>}
          length={100}
          idleAmount={0}
        />
      </div>
    );
  }
}

export default App;
