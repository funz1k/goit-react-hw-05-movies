import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Title = styled.h2`
	min-height: 74px;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 28px;
	text-align: center;
`;

export const List = styled.ul`
    display: grid;
    max-width: calc(100vw - 48px);
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    grid-gap: 16px;
    margin-top: 1em;
    margin-bottom: 1em;
    padding: 0;
    list-style: none;
    margin-left: auto;
    margin-right: auto;
`;

export const Item = styled(Link)`
	width: 100%;
	color: var(--font-colo);
    box-shadow: 0px 1px 4px -2px rgba(0, 0, 0, 0.1),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
	border-radius: 3px;
	& img {
		width: 100%;
	}
`;