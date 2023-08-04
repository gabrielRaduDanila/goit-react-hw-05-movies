import Home from 'pages/Home';
import { Route, Routes } from 'react-router-dom';
import SharedLayout from './pages-components/shared-layout/SharedLayout';
import Movies from '../pages/Movies';
import MoviesInfo from './pages-components/movie-info/MoviesInfo';
import MovieCastInfo from './pages-components/MovieCastInfo/MovieCastInfo';
import MovieReviewsInfo from './pages-components/MovieReviewsInfo/MovieReviewsInfo';

export const App = () => {
  return (
    <SharedLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MoviesInfo />}>
          <Route path="cast" element={<MovieCastInfo />} />
          <Route path="reviews" element={<MovieReviewsInfo />} />
        </Route>

        <Route path="*" element={<Home />} />
      </Routes>
    </SharedLayout>
  );
};
