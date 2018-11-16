import React, { Component } from 'react';
import axios from 'axios';

class Autocomplete extends Component {
  state = {};

  onClickResult = result => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${
          result.id
        }/recommendations?api_key=${
          process.env.REACT_APP_MM_KEY
        }&language=en-US&page=1
    `
      )
      .then(res => {
        this.props.onClickHandler({
          movie: result,
          recommendations: res.data.results
        });
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <ul className="list-group mb-2 shadow pt-0">
        {this.props.results.map(result => {
          const { title, poster_path, release_date, id } = result;

          return (
            <button
              key={id}
              onClick={this.onClickResult.bind(this, result)}
              style={style.result}
              type="button"
              className="list-group-item list-group-item-action py-1"
            >
              <img
                src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                style={style.poster}
                className="mr-2"
              />
              <div style={style.movieName}>
                <h6 style={style.movieName} className="mr-1">
                  {title}
                </h6>
                <span>{release_date.slice(0, 4)}</span>
              </div>
            </button>
          );
        })}
      </ul>
    );
  }
}

const posterWidth = 40;

const style = {
  poster: {
    height: `${posterWidth * 1.5}px`,
    width: `${posterWidth}px`
  },
  movieName: {
    display: 'inline-block'
  },
  result: {
    cursor: 'pointer'
  }
};

export default Autocomplete;
