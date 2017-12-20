import React, { Component } from 'react';
import times from 'lodash/times';
import glamorous from 'glamorous';
import Avatar from './Avatar';
import Details from './Details';

const Container = glamorous.div(
  {
    display: 'flex',
    alignItems: 'center',
    color: 'white',
    padding: 6,
    boxShadow: '0px 0px 1px 1px #000'
  },
  ({ odd }) => ({
    background: odd
      ? 'linear-gradient(to right, #333 , #444)'
      : 'linear-gradient(to right, #666 , #555)'
  })
);

class Row extends Component {
  render() {
    // *** super expensive call to show what happens when rendering a row takes a while *** \\
    const expensiveCall = times(100000, () => {
      return () => {
        return Math.pow(9, 9) * Math.PI;
      };
    }).map(i => i / 2);
    // *** end *** \\

    const { name, avatar, index } = this.props;
    return (
      <Container odd={index % 2}>
        <Avatar img={avatar} />
        <Details name={name} />
      </Container>
    );
  }
}

export default Row;
