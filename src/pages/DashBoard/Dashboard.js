import React, {useEffect, useState} from "react";
import getMovies from '../../api/movies';

const DashBoard = () => {
    const [movies, setMovies] = useState([])
    
    useEffect(() => {
        getMovies().then((data) => 
            setMovies(data)
        )
      }, [])  
    
    return (
    <h1>{movies}</h1>
    );
};

export default DashBoard; 