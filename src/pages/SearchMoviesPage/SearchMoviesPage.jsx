import { useState, useEffect } from "react"
import SearchResults from "../../components/SearchResults/SearchResults";

export default function SearchMoviesPage() {
    const [movies, setMovies] = useState({});
    const [search, setSearch] = useState('');

    const API_KEY = "a72c1d466153d06b65f2879b369031d8"
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${search}&include_adult=false`

    const getMovies = async () => {
        try {
            console.log("Search: ", search)
            const response = await fetch(url);
            const data = await response.json()
            setMovies(data);
            console.log(data)           
        } catch (error) {
            console.log("Error!!>!>!")
            console.error(error);
        }
    }

    useEffect(() => {
        getMovies();
      }, []);

    const onChangeHandler = e => {
        setSearch(e.target.value);
    }

    return (
        <div>
            <h1>Search Movies Page</h1>
            <input type="text" value={search} onChange={onChangeHandler} />
            <button type="submit" onClick={getMovies}>Search</button>
            <SearchResults movies={movies}/>
        </div>
    )
}