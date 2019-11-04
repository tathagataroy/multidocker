import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import OtherPage from './Otherpage';
import Fibs from './Fibs';

function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Link to="/">Home</Link>
        <Link to="/otherpage">Other Page</Link>
      </header>
      <div>
        <Route exact path="/" component= {Fibs}></Route>
        <Route path="/otherpage" component={OtherPage}>
        </Route>
      </div>
    </div>
    </Router>
  );
}


export default App;
