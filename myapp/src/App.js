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
    console.log('testinginigng');
    
    // new array with ninjas copied
    let ninjasNew = [...this.state.ninjas, ninja];
    
    console.log(ninjasNew);

    this.setState({
      ninjas: ninjasNew
    });

    console.log(this.ninjas);

  }
  render() {
    return (
      <div className="App">
        <h1>My first React App</h1>
        <p>Welcome :)</p>
        <Ninjas ninjas={this.state.ninjas} /> 
        <AddNinja addNinja={this.addNinja}/>
      </div>
    );
  }
}

export default App;
