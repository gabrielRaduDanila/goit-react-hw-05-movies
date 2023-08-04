import { useFetchMovies } from 'components/utils/fetchMovies';
import { getTrendMovieUrl } from 'components/utils/utils';
import { Link, useLocation } from 'react-router-dom';

const Home = () => {
  const location = useLocation();
  const { isLoading, isError, data } = useFetchMovies(getTrendMovieUrl);
  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  if (isError) {
    return <h2>Opps, there was a problem. Please try again</h2>;
  }

  if (data) {
    const movies = data.results;
    return (
      <main className="home-main">
        <h1 className="home-title">trending today</h1>
        <ul className="movies-list">
          {movies.map((movie, index) => {
            return (
              <li key={movie.id}>
                <span>{index + 1}</span>
                <Link to={`/movies/${movie.id}`} state={{ from: location }}>
                  {movie.title || movie.name || movie.original_title}
                </Link>
              </li>
            );
          })}
        </ul>
      </main>
    );
  }
};
export default Home;
// to={`/movies/${movie.id}`} state={{ from: location }
