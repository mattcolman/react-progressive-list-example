import React, { Component } from 'react';
import glamorous from 'glamorous';

const Container = glamorous.div({
  display: 'flex',
  padding: 6
});

class Details extends Component {
  render() {
    const { name } = this.props;
    return <Container>{name}</Container>;
  }
}

export default Details;
