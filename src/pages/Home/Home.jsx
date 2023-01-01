import { useState, useEffect } from 'react';
import { Title } from './Home.styled';
import MovieList from 'components/MovieList';
import api from 'Services/tmdbAPI';
import Loader from 'components/Loader';

function Home() {
  const [trendingItems, setTrendingItems] = useState([]);
  const [loader, setLoader] = useState(false);
  useEffect(() => {
    setLoader(true);
    api
      .getTrending()
      .then(items => setTrendingItems([...items.results]))
      .catch(error => console.log(error))
      .finally(() => setLoader(false));
  }, []);
  return (
    <>
      <Title>Trending today</Title>
      {loader && <Loader />}
      {trendingItems.length > 0 && <MovieList items={trendingItems} />}
    </>
  );
}

export default Home;
