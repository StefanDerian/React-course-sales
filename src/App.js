import React, { Component } from 'react';
import logo from './logo.svg';
import CourseSales from './CourseSales';
import './App.css';

class App extends Component {
  render() {
    var courses = [
      {name : 'Complete Dev Courses', price : 200},
      {name : 'InComplete Dev Courses', price : 888},
      {name : 'PVZ Dev Courses', price : 40},
      {name : 'Naruto Dev Courses', price : 60}
    ]


    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Course Purchase Sales</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <CourseSales items = {courses}/>
      </div>

    );
  }
}

export default App;
