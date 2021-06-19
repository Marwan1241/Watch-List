import React, {useContext} from 'react';

export const Overview = ({movie , type}) => {
    return (
        <div>
            <>
            <h1>{movie.overview}</h1>
            </>
        </div>
    )
}
