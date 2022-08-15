
import { Link, useLocation } from 'react-router-dom';

const MovieList = ({ movies }) => {
    const location = useLocation();

    return (
        <ul>
            {
            movies && movies.map(({ id, poster_path, title }) => (
                <Link
                    key={id}
                    to={`/movies/${id}`}
                    state={{ from: location }}>
                    <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={title} />
                    <h3>{title}</h3>
                </Link>
            ))
            }
        </ul >
    )
}

export default MovieList;