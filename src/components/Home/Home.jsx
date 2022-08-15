import { Api } from "services/API";
import { useState, useEffect } from "react";
import MovieList from "components/MovieList/MovieList"

const Home = () => {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        Api().then(({ results }) => { setMovies(results) })
    }, [])

    return (
        <>
            <h2>Trending movies</h2>
            <MovieList movies={movies} />
        </>
        // <ul>
        //     {movies?.map(({ id, title }) => (
        //         <li key={id}>
        //             <Link to={`/movies/${id}`}>{title}</Link>
        //         </li>
        //     ))}
        // </ul>
    )
}

export default Home;