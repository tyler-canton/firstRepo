import React, { Component } from 'react';
 import './App.css';
import Navbar from './components/layout/Navbar'
import Users from './components/users/Users'
class App extends Component {

  state = {
    name: "My First State",
    data: []
  }

  render() {

    return (
      <div className="App">
        <Navbar />
        <Users />
      </div>
    );
  }
}

export default App;
