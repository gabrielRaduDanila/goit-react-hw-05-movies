import { useParams } from 'react-router-dom';
import { API_KEY, BASE_URL } from 'components/utils/utils';
import { useFetchMovies } from 'components/utils/fetchMovies';
import style from './MovieCastInfo.module.css';
import avatarImg from './avatartImage.png';

// https://api.themoviedb.org/3/movie/{movie_id}/credits
// https://image.tmdb.org/t/p/w500$

const MovieCastInfo = () => {
  const { movieId } = useParams();
  const url = `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`;

  const { isLoading, isError, data } = useFetchMovies(url);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  if (isError) {
    return <h2>Opps, there was a problem. Please try again</h2>;
  }

  if (data) {
    const cast = data.cast;

    return (
      <ul className={style.movieCastList}>
        {cast.map(movieCast => {
          const { cast_id, profile_path, character, original_name } = movieCast;
          return (
            <li key={cast_id} className={style.movieCastItem}>
              <img
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w500${profile_path}`
                    : avatarImg
                }
                alt={character}
                className={style.castImage}
              />
              <p className={style.castName}>Character: {character}</p>
              <p className={style.castName}>Name: {original_name}</p>
            </li>
          );
        })}
      </ul>
    );
  }
};
export default MovieCastInfo;
