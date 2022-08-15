import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavContainer = styled.ul`
    display: flex;
    justify-content: center;
    margin-top: 30px;
    padding: 15px 0;
    border-bottom: 1px solid #eee;
`

export const NavItem = styled.li`
        &:not(:last-child) {
        margin-right: 100px;
    }
`

export const NavLinkStyled = styled(NavLink)`
	font-size: 28px;
	font-weight: 600;
	&.active {
		color: #00aed1 ;
	}
    &:hover {
    border-bottom: 3px solid #00aed1;
    }
`;