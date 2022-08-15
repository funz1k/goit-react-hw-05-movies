import { Api } from "services/API";
import { useState, useEffect } from "react";
import MovieList from "components/MovieList/MovieList"
import { Title } from "./Home.styled";

const Home = () => {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        Api().then(({ results }) => { setMovies(results) })
    }, [])

    return (
        <>
            <Title>Trending movies</Title>
            <MovieList movies={movies} />
        </>
    )
}

export default Home;