import React, { Component } from 'react';
import NavBar from './components/layout/NavBar';
import Home from './components/Pages/Home'
import './App.css';

class App extends Component {

    render() {
        return (
            <div className="App">
              <NavBar />
              <div className="container">
                <Home />
              </div>
            </div>
          );

    }
  
}

export default App;
