import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/layout/Header';
import Search from './components/Search';
import SelectedMoviesList from './components/SelectedMoviesList';
import Result from './components/Result';

import { Provider } from './context';

class App extends Component {
  render() {
    return (
      <Provider>
        <div className="App">
          <Header />
          <div className="container">
            <div className="card mb-4 border-0">
              <Search />
              <SelectedMoviesList />
            </div>
            <Result />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
