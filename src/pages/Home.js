import { Movie } from '../components/Movie';
import { useFetchMovies } from 'components/utils/fetchMovies';
import { getTrendMovieUrl } from 'components/utils/utils';

const Home = () => {
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
          {movies.map((movie, index) => (
            <Movie key={movie.id} index={index} movie={movie} />
          ))}
        </ul>
      </main>
    );
  }
};
export default Home;
