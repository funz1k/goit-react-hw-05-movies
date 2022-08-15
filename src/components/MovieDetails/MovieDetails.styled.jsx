import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const CardContainer = styled.div`
display: flex;
padding: 10px 20px 20px;
border-bottom: 1px solid #eee;
`;
export const ImageContainer = styled.div`
margin-right: 35px;
flex-direction: column;
`;

export const Button = styled(NavLink)`
    display: inline-block;
	padding: 10px 20px;
    margin-bottom: 10px;
    border: 1px solid #eee;
	border-radius: 5px;
	font-size: 18px;
    font-weight: 500;
    &:hover{
        background-color: #eee;
    }
`;

export const Image = styled.img`
	display: block;
	border-radius: 5px;
`

export const InfoContainer = styled.div`
    margin-top: 50px;
`

export const FilmTitle = styled.h2`
font-size: 30px;
`
export const Title = styled.h3`
    font-size: 20px;
    margin-bottom: 10px;
    margin-top: 10px;
`

export const Description = styled.p`
font-size:18px;
&:not(:last-of-type) {
    margin-bottom: 20px;
}
`
export const GenresList = styled.ul`
    
`

export const GenreItem = styled.li`
    &:not(:last-child) {
        margin-bottom: 8px;
    }
`

export const AdditionalInfoContainer = styled.div`
    padding: 10px 20px 20px;
    border: 1px solid #eee;
`

export const InfoLink = styled(NavLink)`
	font-size: 18px;
	&:not(:last-of-type) {
		margin-right: 15px;
	}
	&.active {
		color: #00aed1;
	}
    &:hover {
        border-bottom: 1.5px solid #00aed1;
    }
`