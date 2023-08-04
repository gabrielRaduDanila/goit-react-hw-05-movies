import './SharedLayout.module.css';
import { NavLink } from 'react-router-dom';
import { Suspense } from 'react';
import Loading from '../Loading/Loading';

const SharedLayout = ({ children }) => {
  return (
    <div className="container">
      <header>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/movies">Movies</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <Suspense fallback={<Loading />}>
        {/* <Outlet /> */}
        {children}
      </Suspense>
    </div>
  );
};
export default SharedLayout;
