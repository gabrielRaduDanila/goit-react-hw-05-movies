import './SharedLayout.module.css';
import { NavLink, Outlet } from 'react-router-dom';

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
      {/* <Outlet /> */}
      {children}
    </div>
  );
};
export default SharedLayout;
