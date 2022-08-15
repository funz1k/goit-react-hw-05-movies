import styled from 'styled-components';

export const Container = styled.div`
	padding: 20px;
`

export const CastList = styled.ul`
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
`
export const CastItem = styled.li`
	width: 100%;
	height: 400px;
	padding: 5px;
    border: 1px solid #eee;
	border-radius: 5px;
	& img {
		width: 100%;
		max-height: 300px;
		object-fit: cover;
	}
`

export const CastInfo = styled.p`
	margin-top: 10px;
	font-size: 14px;
	font-weight: 600;
`