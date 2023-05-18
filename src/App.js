import React from 'react'
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Admin from './Components/Admin';
import Home from './Components/Home';
import LIstUsers from './Components/LIstUsers';
import NavBar from './Components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/users' component={LIstUsers}/>
          <Route path='/admin' component={Admin}/>
      </Switch>
      
    </div>
  );
}

export default App;
