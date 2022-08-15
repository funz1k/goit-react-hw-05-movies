import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ApiSearch } from 'services/API';
import MovieList from "components/MovieList/MovieList"
import { ImSearch } from 'react-icons/im';

const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams('');
    const query = searchParams?.get('query') || '';

    useEffect(() => {
        if (query === '') {
            return;
        }
        ApiSearch(query).then(({ results }) => setMovies(results));
    }, [query]);

    const handleSubmit = event => {
        event.preventDefault();
        const queryString = event.target.elements.query.value;
        if (queryString.trim() === '') {
            return;
        }
        const form = event.currentTarget;
        setSearchParams({ query: queryString });
        form.reset();
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="query"
                    placeholder="Search movies"
                />
                <button type="submit">
                    <span>
                        <ImSearch style={{ marginRight: 5 }} />
                    </span>
                </button>
            </form>
            <MovieList movies={movies} />
        </>
    );
};

export default Movies;