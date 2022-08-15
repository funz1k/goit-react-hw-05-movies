import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ApiSearch } from 'services/API';
import MovieList from "components/MovieList/MovieList"
import { IconContext } from "react-icons";
import { FaSearch } from "react-icons/fa";
import { SearchContainer, Input, Button } from './Movies.styled';

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
            <SearchContainer onSubmit={handleSubmit}>
                <Input
                    type="text"
                    name="query"
                    placeholder="Search movies"
                />
                <Button type="submit">
                    <IconContext.Provider value={{ verticalAlign: 'middle', size: 25 }}>
                        <FaSearch />
                    </IconContext.Provider>
                </Button>
            </SearchContainer>
            <MovieList movies={movies} />
        </>
    );
};

export default Movies;