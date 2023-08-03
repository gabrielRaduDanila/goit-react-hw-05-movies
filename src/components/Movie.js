import React from 'react';
import { Link } from 'react-router-dom';
export function Movie({ index, movie }) {
  return (
    <li>
      <span>{index + 1}</span>
      <Link to={`movies/${movie.id}`}>{movie.title || movie.name}</Link>
    </li>
  );
}
