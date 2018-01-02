import React, { Component } from 'react';
import glamorous from 'glamorous';

const Container = glamorous.div({
  width: 50,
  height: 50,
  borderRadius: '50%',
  backgroundColor: 'green',
  border: '2px solid white',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
});

class Avatar extends Component {
  render() {
    const { img } = this.props;
    return (
      <Container>
        <img alt="" src={img} width={40} height={40} />
      </Container>
    );
  }
}

export default Avatar;
