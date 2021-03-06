import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import Panel from './panel';


const Home = () =>{
  return(
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
      </header>
      <p className="App-intro">
        To get started, edit <code>src/App.js</code> and save to reload.
      </p>
    </div>
  );
};

class App extends Component{

  render() {
    return (
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/panel' component={Panel}/>
      </Switch>
    );
  }
}

export default App;
