import axios from 'axios';

export const getGenres = async () => {
    const res = await axios.get("http://localhost:3001/genres");
    return res.data
}

export const getGenre = async (id) => {
    const res = await axios.get(`http://localhost:3001/genres/${id}`);
    return res.data
}