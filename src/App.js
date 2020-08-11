import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 26 }
    ],
    // otherState will not be mutated by setState below as it is outside of
    // state, however iw can be added to it
    otherState: 'some other value'
  }

  switchNameHandler= () => {
    // console.log('Was clicked!');
    // DON'T DO THIS, js will not recognize it: this.state.persons[0].name = "Maximilian';"
    // setState is a special Component method to mutate the state property, and
    // merge to existing state. Below will only update persons in state above
    this.setState({
      persons: [
        { name: 'Maximillian', age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 27 }
      ]})
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} >My Hobbies: Racing</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'))
  }
}

export default App;
