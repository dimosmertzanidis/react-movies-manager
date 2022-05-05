import axios from 'axios';

export const getGenres = async () => (
    await axios.get('http://localhost:3001/genres')
    .then(res => {
     return res.data;}
    )
)

export const getGenre = async (id) => (
    await axios.get(`http://localhost:3001/genres/${id}`)
    .then(res => {
     return res.data;}
    )
)