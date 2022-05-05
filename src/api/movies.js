import axios from 'axios';

export const getMovies = async () => (
    await axios.get('http://localhost:3001/movies')
    .then(res => {
     return res.data;}
    )
)

export const getMovie = (id) => (
    axios.get('http://localhost:3001/movies/{id}')
    .then(res => {
     return res.data;}
    )
)

export default getMovies;
