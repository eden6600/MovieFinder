import React, { Component } from 'react';
import '../index.css';
import Autocomplete from './Autocomplete';
import { Consumer } from '../context';
import axios from 'axios';

class Search extends Component {
  state = {
    searchValue: '',
    results: []
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value }, () => {
      const { searchValue } = this.state;

      if (searchValue.length === 0) {
        this.setState({ results: [] });
      }

      if (searchValue.length > 2) {
        axios
          .get(
            `https://api.themoviedb.org/3/search/movie?api_key=${
              process.env.REACT_APP_MM_KEY
            }&query=${searchValue}&page=1`
          )
          .then(res => {
            this.setState({ results: res.data.results });
          })
          .catch(err => console.log(err));
      }
    });
  };

  onClickAdd = (dispath, data) => {
    this.setState({ results: [], searchValue: '' }, () =>
      dispath({ type: 'ADD_MOVIE', payload: data })
    );
  };

  render() {
    const { searchValue } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          const { results } = this.state;

          return (
            <React.Fragment>
              <h1 className="display-4 text-center mb-2">
                Find Your Next Movie
              </h1>
              <p className="lead text-center">
                Give us a list of yours favorite movies and we will find a movie
                for you
              </p>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  style={style.input}
                  placeholder="Enter Name..."
                  name="searchValue"
                  value={this.state.searchValue}
                  onChange={this.onChange}
                />
                <button
                  className="btn bg-info text-white"
                  style={style.searchIcon}
                >
                  <i className="fas fa-search" />
                </button>
              </div>

              <Autocomplete
                results={results}
                onClickHandler={this.onClickAdd.bind(this, dispatch)}
              />
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}

const style = {
  input: {
    borderRight: '0'
  },
  searchIcon: {
    borderRadius: '0 0.25rem 0.25rem 0',
    cursor: 'auto'
  }
};

export default Search;
