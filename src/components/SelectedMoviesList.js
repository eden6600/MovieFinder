import React, { Component } from 'react';
import { Consumer } from '../context';
import axios from 'axios';

class SelectedMoviesList extends Component {
  onClickDelete = (dispatch, id) => {
    dispatch({ type: 'DELETE_MOVIE', payload: id });
  };

  onClickFind = (dispatch, selectedMovies, recommendations) => {
    const ids = [];

    recommendations.forEach(recommend => {
      ids.forEach(id => {
        if (id.id === recommend.id) {
          id.repeats++;
        }
      });
      ids.push({ repeats: 0, ...recommend });
    });

    ids.sort((a, b) => {
      if (a.repeats < b.repeats) return 1;
      if (a.repeats > b.repeats) return -1;
      return 0;
    });

    const result = ids[0];

    axios
      .get(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=${
          process.env.REACT_APP_MM_KEY
        }&language=en-US
`
      )
      .then(res => {
        const genres = res.data.genres.filter(genre =>
          result.genre_ids.includes(genre.id)
        );
        result.genres = genres;

        dispatch({ type: 'SET_RESULT', payload: result });
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Consumer>
        {value => {
          const { selectedMovies, dispatch, recommendations } = value;
          const progressBarClassName =
            selectedMovies.length >= 6
              ? 'progress-bar bg-success'
              : 'progress-bar bg-info';

          return (
            <React.Fragment>
              <div className="col-sm-12 px-0">
                <div className="progress mb-2">
                  <div
                    className={progressBarClassName}
                    role="progressbar"
                    style={{
                      width: `${(selectedMovies.length / 100) * 1667}%`
                    }}
                    aria-valuenow="0"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  />
                </div>
              </div>

              <div className="row">
                {selectedMovies.length > 0 &&
                  selectedMovies.map(movie => {
                    const poster = `http://image.tmdb.org/t/p/w185/${
                      movie.poster_path
                    }`;

                    return (
                      <div
                        className="col-sm-2 mb-2 animated fadeInLeft"
                        key={movie.id}
                      >
                        <div className="card h-100 w-100">
                          <img
                            src={poster}
                            alt="movie-poster"
                            className="card-img-top"
                            style={style.poster}
                          />
                          <i
                            className="fas fa-trash-alt text-white"
                            style={style.deleteIcon}
                            onClick={this.onClickDelete.bind(
                              this,
                              dispatch,
                              movie.id
                            )}
                          />
                        </div>
                      </div>
                    );
                  })}
              </div>

              {selectedMovies.length >= 6 && (
                <button
                  className="btn btn-info animated bounceIn"
                  onClick={this.onClickFind.bind(
                    this,
                    dispatch,
                    selectedMovies,
                    recommendations
                  )}
                >
                  <i className="fas fa-search mr-2" />
                  Find Movie
                </button>
              )}
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}

const style = {
  span: {
    cursor: 'pointer',
    fontSize: '0.8rem'
  },
  deleteIcon: {
    position: 'absolute',
    bottom: '5px',
    right: '5px',
    display: 'inline-block',
    borderRadius: '60px',
    boxShadow: '0px 0px 2px #888',
    padding: '0.5em 0.6em',
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    cursor: 'pointer'
  }
};

export default SelectedMoviesList;
