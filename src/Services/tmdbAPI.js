const baseURL = 'https://api.themoviedb.org/3';

const apiKey = '93b80cff6597de7766bd8c12dccdae0f';

async function searchMovies(query, page) {
  const searchParams = new URLSearchParams({
    api_key: '93b80cff6597de7766bd8c12dccdae0f',
    language: 'en,ru',
    query,
    page: page,
  });
  const response = await fetch(`${baseURL}/search/movie?${searchParams}`).then(
    response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    }
  );
  return response;
}

async function getTrending() {
  const response = await fetch(
    `${baseURL}/trending/movie/day?api_key=${apiKey}`
  ).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
  return response;
}

async function getMovieDetailsById(id) {
  const response = await fetch(`${baseURL}/movie/${id}?api_key=${apiKey}`).then(
    response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    }
  );
  return response;
}

async function getMovieCastById(id) {
  const response = await fetch(
    `${baseURL}/movie/${id}/credits?api_key=${apiKey}`
  ).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
  return response;
}

async function getMovieReviewsById(id) {
  const response = await fetch(
    `${baseURL}/movie/${id}/reviews?api_key=${apiKey}`
  ).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
  return response;
}

const api = {
  getMovieReviewsById,
  searchMovies,
  getMovieCastById,
  getTrending,
  getMovieDetailsById,
};

export default api;
