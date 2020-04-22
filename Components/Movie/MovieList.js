import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

const getMovies = (movies) => {
    return (
      // we take the movie id, and the actual movie variable
        <div className="card-deck">
            {
                movies.map(movie => <MovieCard key={movie.id} movie={movie} />)
            }
        </div>
    );
};

// apply the getmovies above on a set of properties. And as well it takes some default properties in too.
const MovieList = (props) => (
    <div>
        {getMovies(props.movies)}
    </div>
);

MovieList.defaultProps = {
    movies: []
};

MovieList.propTypes = {
    movies: PropTypes.array
};

export default MovieList;