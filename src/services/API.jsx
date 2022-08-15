import axios from "axios";

const ENDPOINT = 'https://api.themoviedb.org/3/trending/movie/day';
const MY_KEY = "c803001b4c6005c4076c37a3ee0a1f4e";

export const Api = () => {
    return axios.get(
        `${ENDPOINT}?api_key=${MY_KEY}`
    ).then(response => response.data)
};

export function ApiSearch(searchQuery) {
    return axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${MY_KEY}&query=${searchQuery}&language=en-US&page=1&include_adult=false`
    ).then(response => response.data);
}

export function ApiDetails(movieID) {
    return axios.get(
        `https://api.themoviedb.org/3/movie/${movieID}?api_key=${MY_KEY}&language=en-US`
    ).then(response => response.data);
}

export function ApiCast(movieID) {
    return axios.get(
        `https://api.themoviedb.org/3/movie/${movieID}/credits?api_key=${MY_KEY}&language=en-US`
    ).then(response => response.data);
}

export function ApiReviews(movieID) {
    return axios.get(
        `https://api.themoviedb.org/3/movie/${movieID}/reviews?api_key=${MY_KEY}&language=en-US&page=1`
    ).then(response => response.data);
}

