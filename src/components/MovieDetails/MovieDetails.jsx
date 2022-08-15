import React, { useState, useEffect } from 'react';
import { useLocation, useParams, Outlet } from 'react-router-dom';
import { ApiDetails } from 'services/API';
import { ImArrowLeft } from 'react-icons/im';
import defaultImg from 'images/avatar.png';
import { CardContainer, ImageContainer, InfoContainer, AdditionalInfoContainer, Button, Image, Title, Description, FilmTitle, GenresList, GenreItem, InfoLink } from './MovieDetails.styled';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [film, setFilm] = useState([]);

  useEffect(() => {
    ApiDetails(movieId).then(data => setFilm(data));
  }, [movieId]);

  const poster =
    film?.poster_path && `https://image.tmdb.org/t/p/w500/${film?.poster_path}`;
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';
  const query = location?.state?.from?.search;

  return (
    <>
      {film && (
        <CardContainer >
          <ImageContainer>
            <Button to={backLinkHref}>
              <ImArrowLeft style={{ marginRight: 8, verticalAlign: 'middle' }} />
              Go back
            </Button>
            <Image
              src={film.poster_path ? poster : defaultImg}
              alt=""
              width={400}
            />
          </ImageContainer>
          <InfoContainer>
            <FilmTitle>{film.title}</FilmTitle>
            <Title>Overview</Title>
            <Description>{film.overview}</Description>
            <Description>User Score: {Math.round(film.vote_average * 10)} %</Description>
            <Title>Genres:</Title>
            <GenresList>
              {film?.genres?.map(({ id, name }) => (
                <GenreItem key={id}>{name}</GenreItem>
              ))}
            </GenresList>
          </InfoContainer>
        </CardContainer>
      )}
      <AdditionalInfoContainer >
        <Title>Additional information</Title>
        <InfoLink to="cast" state={{ from: `/movies${query}` }}>
          Cast
        </InfoLink>
        <InfoLink to="reviews" state={{ from: `/movies${query}` }}>
          Reviews
        </InfoLink>
      </AdditionalInfoContainer>
      <Outlet />

    </>
  );
};

export default MovieDetails;