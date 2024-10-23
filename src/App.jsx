import { useState } from 'react';

import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function filteredMovie(movies, { currentValue }) {
  return movies.filter(
    movie =>
      movie.title.toLowerCase().includes(currentValue.toLowerCase().trim()) ||
      movie.description
        .toLowerCase()
        .includes(currentValue.toLowerCase().trim()),
  );
}

export const App = () => {
  const [currentValue, setCurrentValue] = useState('');

  const visibleMovie = filteredMovie(moviesFromServer, { currentValue });

  return (
    <div className="page">
      <div className="page-content">
        <div className="box">
          <div className="field">
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label htmlFor="search-query" className="label">
              Search movie
            </label>

            <div className="control">
              <input
                type="text"
                id="search-query"
                className="input"
                placeholder="Type search word"
                onChange={event => {
                  setCurrentValue(event.target.value);
                }}
              />
            </div>
          </div>
        </div>

        <MoviesList movies={visibleMovie} />
      </div>

      <div className="sidebar">Sidebar goes here</div>
    </div>
  );
};