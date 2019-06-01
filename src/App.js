import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Login from './components/Login';
import Welcome from './components/Welcome';
import Register from './components/Register';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='container'>
        <Route exact path='/' component={Login} />
        <Route exact path='/welcome' component={Welcome} />
        <Route path='/register' component={Register} />
      </div>
    );
  }
}

export default App;
