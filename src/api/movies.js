import axios from 'axios';

export const getMovies = async () => {
    const res = await axios.get("http://localhost:3001/movies");
    return res.data
}

export const getMovie = async ({queryKey}) => {
    const [_, movieId] = queryKey;
    const res = await axios.get(`http://localhost:3001/movies/${movieId}`);
    return res.data
}

export const createMovie = async (movie) => {
    const res = await axios.post(`http://localhost:3001/movies/`, movie);
    return res.data
}


