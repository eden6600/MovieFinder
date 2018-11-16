import React, { Component } from 'react';
import axios from 'axios';

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case 'DELETE_MOVIE':
      console.log(action.payload);
      return {
        ...state,
        selectedMovies: state.selectedMovies.filter(
          movie => movie.id !== action.payload
        )
      };

    case 'ADD_MOVIE':
      return {
        ...state,
        selectedMovies: [action.payload.movie, ...state.selectedMovies],
        recommendations: [
          ...action.payload.recommendations,
          ...state.recommendations
        ]
      };

    case 'SET_RESULT':
      action.payload.poster = `http://image.tmdb.org/t/p/w342/${
        action.payload.poster_path
      }`;

      const { vote_average } = action.payload;
      let rating = [];
      for (let i = 1; i < vote_average / 2; i++) {
        rating.push(<i className="fas fa-star text-info" key={i} />);
      }
      if (vote_average / 2 - Math.floor(vote_average / 2) > 0.5) {
        rating = [...rating, <i className="fas fa-star-half-alt text-info" />];
      }
      const ratingLenght = rating.length;
      for (let i = 0; i < 5 - ratingLenght; i++) {
        rating = [...rating, <i className="far fa-star" key={i * 5} />];
      }

      action.payload.rating = rating;

      return { ...state, result: action.payload };

    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    selectedMovies: [],
    recommendations: [],
    result: {},
    dispatch: action => this.setState(state => reducer(state, action))
  };

  componentDidMount() {
    this.state.selectedMovies.forEach(movie => {
      axios
        .get(
          `https://api.themoviedb.org/3/search/movie?api_key=${
            process.env.REACT_APP_MM_KEY
          }&query=${movie.title}&page=1`
        )
        .then(res => {
          axios
            .get(
              `https://api.themoviedb.org/3/movie/${
                res.data.results[0].id
              }/recommendations?api_key=${
                process.env.REACT_APP_MM_KEY
              }&language=en-US&page=1`
            )
            .then(res => {
              this.setState({
                recommendations: [
                  ...res.data.results,
                  ...this.state.recommendations
                ]
              });
            })
            .catch(err => console.log(err));
        })
        .catch(err => console.log(err));
    });
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
