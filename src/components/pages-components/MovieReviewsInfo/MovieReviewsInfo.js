import { useParams } from 'react-router-dom';
import { API_KEY, BASE_URL } from 'components/utils/utils';
import { useFetchMovies } from 'components/utils/fetchMovies';
import avatarImg from '../MovieCastInfo/avatartImage.png';
import style from './MovieReviewsInfo.module.css';

const MovieReviewsInfo = () => {
  const { movieId } = useParams();
  const url = `${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}`;

  const { isLoading, isError, data } = useFetchMovies(url);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  if (isError) {
    return <h2>Opps, there was a problem. Please try again</h2>;
  }

  if (data) {
    const reviewData = data.results;

    if (reviewData.length === 0) {
      return <h2>No review for this movie</h2>;
    } else {
      return (
        <div>
          {reviewData.map(review => {
            const { name, avatar_path } = review.author_details;
            const reviewContent = review.content;
            const id = review.id;
            return (
              <div key={id}>
                <h3>Author: {name || 'Unknown'}</h3>
                <img
                  src={
                    avatar_path
                      ? `https://image.tmdb.org/t/p/w500${avatar_path}`
                      : avatarImg
                  }
                  alt={name}
                  className={style.reviewImage}
                />
                <p>
                  {reviewContent ? reviewContent : 'no review for this movie'}
                </p>
              </div>
            );
          })}
        </div>
      );
    }
  }
};
export default MovieReviewsInfo;
