import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ApiReviews } from 'services/API';

const Reviews = () => {
    const { movieId } = useParams();
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        ApiReviews(movieId).then(data => setReviews(data.results));
    }, [movieId]);
    return (
        <>
            <div>
                {reviews.length ? (
                    reviews.map(({ id, author, content }) => (
                        <div key={id}>
                            <p>Author: {author}</p>
                            <p>{content}</p>
                        </div>
                    ))
                ) : (
                    <p >
                        We don`t have any reviews for this movie
                    </p>
                )}
            </div>
        </>
    );
};

export default Reviews;