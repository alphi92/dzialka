import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import kontakt from "./components/kontakt"
import galeria from "./components/galeria"
import home from "./components/home"
import mapa from "./components/mapa"

class App extends Component{

  render(){
    return (
      <div className="container">
        <BrowserRouter>
          <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
            <Link to="/home">Home</Link>
            <Link to="/galeria">Galeria</Link>
            <Link to="/mapa">Mapa</Link>
            <Link to="/kontakt">Kontakt</Link>
            </nav>
          </header>
            <Switch>
              <Route exact path="/" component={home} />
              <Route path="/home" component={home} />
              <Route path="/kontakt" component={kontakt} />
              <Route path="/mapa" component={mapa} />
              <Route path="/galeria" component={galeria} />
            </Switch>
        </BrowserRouter>
        
        
      </div>
    );
  }
}

export default App;
