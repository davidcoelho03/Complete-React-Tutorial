import React, { Component } from 'react';

class Ninjas extends Component {
  render(){
    const {name, age, belt} = this.props;
    return(
      <div>
        <div>Name: {name}</div>
        <div>Age: {age}</div>
        <div>Belt: {belt}</div>
      </div>
    )
  }
}

export default Ninjas;
