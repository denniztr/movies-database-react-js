import PropTypes from "prop-types";

import {Movie} from "./movie.jsx";

export const Movies = props => {
    const { movies } = props;
    return (
        <div className="movies">
            {movies ? movies.map(movie => (
                <Movie key={movie.imdbID} {...movie} />
            )) : (<h4>not found</h4>)}
        </div>
    )
}

Movies.propTypes = {
    movies: PropTypes.array
}

