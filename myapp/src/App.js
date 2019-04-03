import React, { Component } from 'react';
import Ninjas from './Ninjas'

class App extends Component {
  state = {
    ninjas: [
      {name: 'David', age: '30', belt: 'brown', id: 1},
      {name: 'Diogo', age: '24', belt: 'green', id: 2},
      {name: 'Bruno', age: '26', belt: 'blue', id: 3}
    ]
  }
  render() {
    return (
      <div className="App">
        <h1>My first React App</h1>
        <p>Welcome :)</p>
        <Ninjas ninjas={this.state.ninjas} /> 
      </div>
    );
  }
}

export default App;
