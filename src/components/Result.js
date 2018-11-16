import React, { Component } from 'react';
import { Consumer } from '../context';
import StarRatings from 'react-star-ratings';
import Axios from 'axios';

class Result extends Component {
  state = {};

  render() {
    let resultRender;

    return (
      <Consumer>
        {value => {
          const { result } = value;

          if (Object.getOwnPropertyNames(result).length > 0) {
            return (
              <div className="card animated zoomIn">
                <div className="row">
                  <div className="col-md-4">
                    <img src={result.poster} alt="" className="w-100" />
                  </div>
                  <div className="col-md-8">
                    <div className="card-block p-3">
                      <h4 className="card-title">
                        {result.title}
                        <span className="ml-1" style={style.yearText}>
                          {result.release_date.slice(0, 4)}
                        </span>
                      </h4>
                      <p className="card-text">
                        <strong>Rating: </strong>
                        {result.rating} <br />
                        <strong>Genres: </strong>{' '}
                        {result.genres.map((genre, index) => {
                          if (index != result.genres.length - 1)
                            return genre.name + ' | ';
                          else return genre.name;
                        })}
                      </p>
                      <p className="card-text lead">{result.overview}</p>
                      <a className="btn btn-info text-white">
                        <i className="fab fa-imdb text-white mr-2" />
                        IMDB Page
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          } else {
            return null;
          }
        }}
      </Consumer>
    );
  }
}

const style = {
  spinnerContainer: {
    marginTop: '100px'
  },
  yearText: {
    fontSize: '12px'
  }
};

export default Result;
