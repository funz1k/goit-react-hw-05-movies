import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ApiCast } from 'services/API';
import defaultImg from 'images/avatar.png';
import { Container, CastList, CastItem, CastInfo } from './Cast.styled';

const Cast = () => {
    const { movieId } = useParams();
    const [cast, setCast] = useState([]);

    useEffect(() => {
        ApiCast(movieId).then(({ cast }) => setCast(cast));
    }, [movieId]);

    return (
        <Container>
            {cast && (
                <CastList>
                    {cast.map(({ id, name, profile_path, character }) => (
                        <CastItem key={id}>
                            <img
                                src={
                                    profile_path
                                        ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                                        : defaultImg
                                }
                                alt={name}
                                width={150}
                            />
                            <CastInfo>{name}</CastInfo>
                            <CastInfo>Charecter: {character}</CastInfo>
                        </CastItem>
                    ))}
                </CastList>
            )}
        </Container>
    );
};

export default Cast;