import React, { Component } from 'react';
import times from 'lodash/times';
import glamorous from 'glamorous';
import { css } from 'glamor';
import ReactProgressiveList from './ReactProgressiveList';
import './App.css';

const Container = glamorous.div({
  height: 200,
  backgroundColor: '#999',
  overflow: 'scroll'
});

const RowDiv = glamorous.div({
  height: 50
});

const rotation = css.keyframes({
  from: {
    transform: 'rotate(0deg)'
  },
  to: {
    transform: 'rotate(359deg)'
  }
});

const Spinner = glamorous.div({
  animation: `${rotation} .6s infinite linear`,
  borderRadius: '100%',
  display: 'flex',
  marginLeft: 'auto',
  marginRight: 'auto',
  borderBottom: '2px solid rgba(255, 255, 255, 0.3)',
  borderLeft: '2px solid rgba(255, 255, 255, 0.3)',
  borderRight: '2px solid rgba(255, 255, 255, 0.3)',
  borderTop: '2px solid rgba(255, 255, 255, 1)',
  height: 30,
  width: 30,
  marginBottom: 30
});

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> oh hi React Progressive List </h1>
        <Container>
          <ReactProgressiveList
            itemRenderer={() => <RowDiv> hi </RowDiv>}
            length={40}
            idleAmount={0}
            initialAmount={20}
            progressiveAmount={10}
            renderLoader={() => <Spinner />}
          />
        </Container>
      </div>
    );
  }
}

export default App;
