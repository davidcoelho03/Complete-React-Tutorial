import React, { Component } from 'react';
import Ninjas from './Ninjas';
import AddNinja from './AddNinja';

class App extends Component {
  state = {
    ninjas: [
      {name: 'David', age: '30', belt: 'brown', id: 1},
      {name: 'Diogo', age: '24', belt: 'green', id: 2},
      {name: 'Bruno', age: '26', belt: 'blue', id: 3}
    ]
  }
  addNinja = (ninja) => {
    ninja.id = Math.random();    

    // new array with ninjas copied
    let ninjasNew = [...this.state.ninjas, ninja];
    
    this.setState({
      ninjas: ninjasNew
    });
  }
  deleteNinja = (id) => {
    this.setState({
      ninjas: this.state.ninjas.filter(ninja => ninja.id !== id)
    });
  }
  render() {
    return (
      <div className="App">
        <h1>My first React App</h1>
        <p>Welcome :)</p>
        <Ninjas deleteNinja={this.deleteNinja} ninjas={this.state.ninjas} /> 
        <AddNinja addNinja={this.addNinja}/>
      </div>
    );
  }
}

export default App;
