import axios from 'axios';
import { useState, useEffect } from 'react';

export const useFetchMovies = url => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  // const [movies, setmovies] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(url);
        const data = await response.data;
        // const movies = await response.data.results;
        // setmovies(movies);
        setData(data);
      } catch (error) {
        console.log(error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { isLoading, isError, data };
};
