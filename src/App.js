import './App.css';
import {BrowserRouter as Router, Route, NavLink} from "react-router-dom";
import Home from "./component/home";
import Voting from "./component/voting";
import React from "react";

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      bjp:0,
      congress:0,
      aap:0,
      rjd:0
    }
  }
  render(){
  return (
    <div className="App">
      <Router>
      <header className="App-header">
        <nav className="navbar navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand"><b>Voting System</b></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
                <NavLink className="nav-link" to="/voting">Voting Panel</NavLink>
              </div>
            </div>
          </div>
        </nav>
        <Route exact path="/" render={(props)=> <Home voteState={this.state} />}/>
        <Route path="/voting" render={(props)=> <Voting voteState={this.state} />}/>
      </header>
      </Router>
    </div>
  );
  }
}

export default App;
