import React, { Component } from 'react';
import glamorous from 'glamorous';
import { css } from 'glamor';
import ReactProgressiveList from 'react-progressive-list';
import logo from './react-progressive-list.jpg';
import avatar1 from './images/avatar1.png';
import avatar2 from './images/avatar2.png';
import avatar3 from './images/avatar3.png';
import avatar4 from './images/avatar4.png';
import avatar5 from './images/avatar5.png';
import avatar6 from './images/avatar6.png';
import avatar7 from './images/avatar7.png';
import avatar8 from './images/avatar8.png';
import avatar9 from './images/avatar9.png';
import Row from './Row';
import './App.css';

const Container = glamorous.div({
  height: 230,
  maxWidth: 600,
  margin: '0 auto',
  backgroundColor: 'black',
  overflow: 'scroll'
});

const Heading = glamorous.h1({
  color: 'white'
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
  marginBottom: 30,
  marginTop: 10
});

class App extends Component {
  renderRow = index => {
    const avatar = [
      avatar1,
      avatar2,
      avatar3,
      avatar4,
      avatar5,
      avatar6,
      avatar7,
      avatar8,
      avatar9
    ][index % 9];
    const name = ['pete', 'paul', 'ronald'][index % 3];
    return <Row key={index} avatar={avatar} name={name} index={index} />;
  };
  render() {
    return (
      <div className="App">
        <img src={logo} alt="" width={140} height={140} />
        <Container>
          <ReactProgressiveList
            idleAmount={0}
            initialAmount={20}
            progressiveAmount={10}
            renderItem={this.renderRow}
            renderLoader={() => <Spinner />}
            rowCount={50}
            useWindowScroll={false}
          />
        </Container>
      </div>
    );
  }
}

export default App;
