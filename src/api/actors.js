import axios from 'axios';

export const getActors = async () => {
    const res = await axios.get("http://localhost:3001/actors");
    return res.data
}

export const getActor = async (id) => {
    const res = await axios.get(`http://localhost:3001/actors/${id}`);
    return res.data
}