import axios from 'axios';

export const getActors = async () => (
    await axios.get('http://localhost:3001/actors')
    .then(res => {
     return res.data;}
    )
)

export const getMovie = async (id) => (
    await axios.get(`http://localhost:3001/actors/${id}`)
    .then(res => {
     return res.data;}
    )
)