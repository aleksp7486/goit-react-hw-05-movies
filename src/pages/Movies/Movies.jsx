import SearchBox from 'components/SearchBox';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import api from 'Services/tmdbAPI';
import MovieList from 'components/MovieList';
import { LoadBtn } from './Movies.styled';
import { toast } from 'react-toastify';
import Loader from 'components/Loader';

function Movies() {
  const [searchItems, setSearchItems] = useState([]);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(null);
  const [loader, setLoader] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get('query');

  const onSearchSubmit = value => {
    setSearchParams(value !== '' ? { query: value } : {});
    setSearchItems([]);
    setTotalResults(null);
    setPage(1);
  };

  useEffect(() => {
    if (query) {
      setLoader(true);
      api
        .searchMovies(query, page)
        .then(response => {
          if (page === 1) {
            if (response.total_results === 0) {
              toast.error('No result found for your request');
              return;
            }
            setTotalResults(response.total_results);
            setSearchItems([...response.results]);
            return;
          }

          setSearchItems(prev => [...prev, ...response.results]);
        })
        .catch(error => console.error(error))
        .finally(() => setLoader(false));
    }
  }, [page, query]);

  const onLoadBtnClick = () => {
    setPage(state => state + 1);
  };

  useEffect(() => {
    if (totalResults === searchItems.length) {
      toast.info("It's all according to your request");
    }
  }, [searchItems.length, totalResults]);

  return (
    <main>
      <SearchBox onSearchSubmit={onSearchSubmit} />
      {loader && <Loader />}
      {searchItems.length > 0 && <MovieList items={searchItems} />}
      {searchItems.length > 0 && searchItems.length !== totalResults && (
        <LoadBtn onClick={onLoadBtnClick}>Load more...</LoadBtn>
      )}
    </main>
  );
}

export default Movies;
