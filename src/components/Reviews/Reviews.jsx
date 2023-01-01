import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Author, List } from './Reviews.styled';
import api from 'Services/tmdbAPI';

function Reviews() {
  const { id } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    api
      .getMovieReviewsById(id)
      .then(items => setReviews([...items.results]))
      .catch(error => console.log(error));
  }, [id]);

  if (reviews.length < 1) {
    return null;
  }

  return (
    <ul>
      {reviews.map(review => {
        const { id: reviewsId, author, content } = review;
        return (
          <List key={reviewsId}>
            <Author>Author: {author}</Author>
            <p>{content}</p>
          </List>
        );
      })}
    </ul>
  );
}

export default Reviews;
