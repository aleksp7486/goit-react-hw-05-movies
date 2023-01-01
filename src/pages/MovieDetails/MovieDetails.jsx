import { useState, useEffect, Suspense } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { Box } from 'components/Box';
import {
  Board,
  ImageWrap,
  Image,
  Text,
  Title,
  SectionTitle,
  Item,
  StyledLink,
  BackLink,
} from './MovieDetails.styled';
import api from 'Services/tmdbAPI';
import { TbArrowBack } from 'react-icons/tb';

function MovieDetails() {
  const [movie, setMovie] = useState(null);
  const { id } = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/movies';

  useEffect(() => {
    api
      .getMovieDetailsById(id)
      .then(setMovie)
      .catch(error => console.log(error));
  }, [id]);

  if (!movie) {
    return null;
  }

  const { title, poster_path, vote_average, release_date, overview, genres } =
    movie;

  return (
    <main>
      <BackLink to={backLinkHref}>
        <TbArrowBack size={32} />
      </BackLink>
      <Board>
        <ImageWrap>
          <Image
            src={`https://image.tmdb.org/t/p/w500${poster_path}`}
            alt="title"
          />
        </ImageWrap>
        <Box>
          <Title>{title}</Title>
          <Text>Release date: {release_date}</Text>
          <Text>Rating: {vote_average.toFixed(1)}/10</Text>
          <SectionTitle>Overview</SectionTitle>
          <Text>{overview}</Text>
          <SectionTitle>Genres</SectionTitle>
          <Text>{genres.map(genr => genr.name).join(' ')}</Text>
        </Box>
      </Board>
      <Box as="ul" display="flex" mb={4}>
        <Item>
          <StyledLink to="cast">Cast</StyledLink>
        </Item>
        <Item>
          <StyledLink to="reviews">Reviews</StyledLink>
        </Item>
      </Box>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </main>
  );
}

export default MovieDetails;
