import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';

import Navbar from './components/layout/Navbar';

import Landing from './components/home/Landing';
import Movie from './components/home/Movie';

import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Navbar />
            <Routes>
              <Route exact path='/' element={<Landing />} />
              <Route exact path='/movie/:id' element={<Movie />} />
            </Routes>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
