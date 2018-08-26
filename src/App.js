import React, { Component } from 'react';
import { BrowserRouter, Route, Link , Switch} from "react-router-dom";

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import './App.css';

import Favourites from './pages/Favourites';
import Settings from './pages/Settings';
import Home from './pages/Home';
import Navigation from './pages/Navigation';

class App extends Component {
  render() {
    return (
      <div className="App">
          
            <BrowserRouter>
                <div>
                    <Navigation />

                    <br />

                    <Switch>
                        <Route path="/" exact component={Home}></Route>
                        <Route path="/Favourites" exact component={Favourites}></Route>
                        <Route path="/Settings" exact component={Settings}></Route>
                    </Switch>
                </div>
            </BrowserRouter>
      </div>
    );
  }
}

export default App;
