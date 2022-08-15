import { NavContainer, NavLinkStyled, NavItem } from './Navigation.styled';

const Navigation = () => {
    return (
        <NavContainer>
            <NavItem>
                <NavLinkStyled
                    className={({ isActive }) => (isActive ? 'activeNavLink' : 'NavLink')}
                    to="/"
                >
                    Home
                </NavLinkStyled>
            </NavItem>
            <NavItem>
                <NavLinkStyled
                    className={({ isActive }) => (isActive ? 'activeNavLink' : 'NavLink')}
                    to="/movies"
                >
                    Movies
                </NavLinkStyled>
            </NavItem>
        </NavContainer>
    );
};

export default Navigation;