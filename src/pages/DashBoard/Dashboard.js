import React, {useEffect, useState} from "react";
import {getMovies} from '../../api/movies';
import {useQuery} from 'react-query'

const DashBoard = () => {
    const {status, data } = useQuery("movies", () => getMovies())
    return (
    <h1></h1>
    );
};

export default DashBoard; 