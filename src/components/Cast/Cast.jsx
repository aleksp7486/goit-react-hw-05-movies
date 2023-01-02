import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from 'Services/tmdbAPI';
import { List, Item, Image, ImageWrap, Text } from './Cast.styled';
import noPhoto from 'images/noPhoto.png';
function Cast() {
  const { id } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    api
      .getMovieCastById(id)
      .then(items => setCast([...items.cast]))
      .catch(error => console.log(error));
  }, [id]);

  if (cast.length < 1) {
    return null;
  }

  return (
    <List>
      {cast.map(person => {
        const { id, profile_path, name } = person;
        const profileImage = profile_path
          ? `https://image.tmdb.org/t/p/w500${profile_path}`
          : noPhoto;
        return (
          <Item key={id}>
            <ImageWrap>
              <Image src={profileImage} alt={name} />
            </ImageWrap>

            <Text>{name}</Text>
          </Item>
        );
      })}
    </List>
  );
}

export default Cast;
