import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ApiReviews } from 'services/API';
import { Container, ReviewsList, ReviewsItem, ReviewsInfo } from './Reviews.styled';

const Reviews = () => {
    const { movieId } = useParams();
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        ApiReviews(movieId).then(data => setReviews(data.results));
    }, [movieId]);
    return (
        <Container>
            <ReviewsList>
                {reviews.length ? (
                    reviews.map(({ id, author, content }) => (
                        <ReviewsItem key={id}>
                            <ReviewsInfo>Author: {author}</ReviewsInfo>
                            <ReviewsInfo>{content}</ReviewsInfo>
                        </ReviewsItem>
                    ))
                ) : (
                    <ReviewsInfo >
                        We don`t have any reviews for this movie
                    </ReviewsInfo>
                )}
            </ReviewsList>
        </Container>
    );
};

export default Reviews;