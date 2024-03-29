import {useState, useEffect} from "react";

import {Movies} from "../components/movies.jsx";
import {Loader} from "../components/loader.jsx";
import {Search} from "../components/search.jsx";

import axios from "axios";

export const Main = () => {
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('https://www.omdbapi.com/?apikey=5d707a54&s=lost')
            .then((res) => {
                if (res.status === 200) {
                    setMovies(res.data.Search)
                    setLoading(false)
                }
            })
            .catch((error) => {
                console.err(error.message)
                setError(error.message)
                setLoading(false)
            })
    }, []);

    const handleSearch = (str, type = "all") => {
        setLoading(true)
        axios.get(`https://www.omdbapi.com/?apikey=5d707a54&s=${str}${type !== "all" ? `&type=${type}` : ""}`)
            .then((res) => {
                if (res.status === 200) {
                    setMovies(res.data.Search)
                    setLoading(false)
                }
            })
            .catch((error) => {
                console.err(error.message)
                setError(error.message)
                setLoading(false)
            })
    }

    return (
        <main className="container content">
            <Search handleSearch={handleSearch} />
            {loading ? <Loader /> : <Movies movies={movies} /> }
            {error && <p>{error}</p>}
        </main>
    )
}