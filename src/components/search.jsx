import {useState} from "react";
import PropTypes from "prop-types";

export const Search = props => {
    const { handleSearch } = props;

    const [search, setSearch] = useState('Lost');
    const [type, setType] = useState('all');

    const handleKey = (event) => {
        if (event.key === 'Enter') {
            handleSearch(search, type)
        }
    }

    const handleFilter = (event) => {
        setType(event.target.dataset.datatype)
        handleSearch(search, event.target.dataset.datatype)
    }

    return (
        <div className="col s12">
            <div className="input-field">
                <input
                    className="validate"
                    placeholder="Lost"
                    type="search"
                    defaultValue={search}
                    onChange={(event) => setSearch((event.target.value))}
                    onKeyDown={handleKey}
                />
                <button
                    className="btn blue-grey darken-4 search-btn"
                    onClick={() => handleSearch(search, type)}>Search</button>
            </div>
            <div className="radio-container">
                    <label>
                        <input
                            className="with-gap"
                            name="type"
                            type="radio"
                            data-datatype="all"
                            onChange={handleFilter}/>
                        <span className="span-btn">All</span>
                    </label>
                    <label>
                        <input
                            className="with-gap"
                            name="type"
                            type="radio"
                            data-datatype="movie"
                            onChange={handleFilter}/>
                        <span>Movies</span>
                    </label>
                    <label>
                        <input
                            className="with-gap"
                            name="type" type="radio"
                            data-datatype="series"
                            onChange={handleFilter}/>
                        <span>Series</span>
                    </label>
            </div>
        </div>
    )
}

Search.propTypes = {
    handleSearch: PropTypes.func,
}