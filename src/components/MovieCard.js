import React from 'react';
import { MovieControls } from './MovieControls';
import { Overview } from './Overview';

export const MovieCard = ({movie , type}) => {
    return (
        <div className="movie-card">
            <div className="overlay" onClick={() => alert("This is a movie")}></div>


            {movie.poster_path ? (
                    <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={`${movie.title} Poster`}  />
                ) : (
                    <div className="filler-poster"></div>
                )}

                <MovieControls type={type} movie={movie} />
            </div>
    );
};
