import React, {useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';

export const ResultCard = ({movie}) => {
    const { addMovieToWatchlist, addMovieToWatched ,watchlist ,watched} = useContext(GlobalContext);

    let storedMovie = watchlist.find(o => o.id === movie.id);
    let storedMovieWatched = watched.find(o => o.id === movie.id);

    const watchlistDisabled = storedMovie ? true : storedMovieWatched ? true : false;
    const watchDisabled = storedMovieWatched ? true : false;

    const trailer_api = `https://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=${process.env.REACT_APP_TMDB_KEY}`;
    const trailer_key = trailer_api.key;
    return (
        <div className="result-card">
            <div className="poster-wrapper">
                {movie.poster_path ? (
                    <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={`${movie.title} Poster`} />
                ) : (
                    <div className="filler-poster"></div>
                )}

                <div className="info">
                    <div className="header">
                        <h3 className="title">{movie.title}</h3>
                        <h4 className="release-date">
                            {movie.release_date ? movie.release_date.substring(0 ,4) : "-"}
                            </h4>
                        <h5 className="overview">
                            {movie.overview ? movie.overview : "No overview available"}
                        </h5>
                        <a className="trailer">
                        {movie.id ?  <a href={`https://www.youtube.com/watch?v=BdJKm16Co6M`}>Trailer</a> : "No trailer available"}
                        </a>
                    </div>

                    <div className="controls">
                        <button className="btn" 
                        disabled={watchlistDisabled}
                        onClick={() => addMovieToWatchlist(movie)}>
                            Add to Watchlist
                        </button>

                        <button className="btn" 
                        disabled={watchDisabled}
                        onClick={() => addMovieToWatched(movie)}>
                            Add to Watched
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
