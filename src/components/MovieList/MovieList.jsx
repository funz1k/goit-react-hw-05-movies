
import { useLocation } from 'react-router-dom';
import { Item, List, Title } from './MovieList.styled';

const MovieList = ({ movies }) => {
    const location = useLocation();

    return (
        <List>
            {
                movies && movies.map(({ id, poster_path, title }) => (
                    <Item
                        key={id}
                        to={`/movies/${id}`}
                        state={{ from: location }}>
                        <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={title} />
                        <Title>{title}</Title>
                    </Item>
                ))
            }
        </List >
    )
}

export default MovieList;