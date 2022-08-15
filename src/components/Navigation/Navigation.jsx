import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <header>
            <span>
                <NavLink
                    className={({ isActive }) => (isActive ? 'activeNavLink' : 'NavLink')}
                    to="/"
                >
                    Home
                </NavLink>
            </span>
            <span>
                <NavLink
                    className={({ isActive }) => (isActive ? 'activeNavLink' : 'NavLink')}
                    to="/movies"
                >
                    Movies
                </NavLink>
            </span>
        </header>
    );
};

export default Navigation;