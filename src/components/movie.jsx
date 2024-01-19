import PropTypes from "prop-types";

export const Movie = props => {
    const {
        Title: title,
        Year: year,
        imdbID: id,
        Type: type,
        Poster: poster,
    } = props;

    return (
        <div className="card movie" id={id}>
            <div className="card-image waves-effect waves-block waves-light">
                {   poster === 'N/A' ?
                    <img className="activator" src={`https://placehold.co/600x400?text=${title}`} alt="poster"/>
                    :
                    <img className="activator" src={poster} alt="poster"/>
                }
            </div>
            <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">{title}</span>
                <p>{year} <span className="right">{type}</span></p>
            </div>
            <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">{title}<i className="material-icons right">close</i></span>
                <p>Here is some more information about this product that is only revealed once clicked on.</p>
            </div>
        </div>
    )
};


Movie.propTypes = {
    // movie: PropTypes.shape({
    //     Title: PropTypes.string,
    //     Year: PropTypes.string,
    //     imdbID: PropTypes.string,
    //     Type: PropTypes.string,
    //     Poster: PropTypes.string,
    // }).isRequired,
    Title: PropTypes.string,
    Year: PropTypes.string,
    imdbID: PropTypes.string,
    Type: PropTypes.string,
    Poster: PropTypes.string,
};