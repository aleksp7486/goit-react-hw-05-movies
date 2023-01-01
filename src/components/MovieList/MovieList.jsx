import PropTypes from 'prop-types';
import { Item, StyledLink } from './MovieList.styled';
import { useLocation } from 'react-router-dom';
import { MdMovie } from 'react-icons/md';
import { Box } from 'components/Box';

function MovieList({ items }) {
  const location = useLocation();

  return (
    <Box as="ul" mb={4}>
      {items.map(item => {
        const { id, title } = item;
        return (
          <Item key={id}>
            <StyledLink to={`/movies/${id}`} state={{ from: location }}>
              <span>
                <MdMovie />
              </span>
              {title}
            </StyledLink>
          </Item>
        );
      })}
    </Box>
  );
}

MovieList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
};

export default MovieList;
