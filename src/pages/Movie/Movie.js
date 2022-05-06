import {React} from "react";
import {Col, Container, Row, Navbar, Button} from "react-bootstrap";
import Sidebar from "../SideBar/SideBar";
import {getMovie, deleteMovie} from '../../api/movies';
import {useQuery} from 'react-query'
import { Table, Spinner } from "reactstrap";
import { Link, Navigate, useNavigate } from "react-router-dom";


const Movie = () => {

    const movieId = window.location.pathname.substring(window.location.pathname.lastIndexOf('/') + 1)
    const { status, data: movie } = useQuery([ 'movie', movieId], getMovie);
    const navigate = useNavigate();

const editMovie = (e) => {
    e.preventDefault();
    alert('edit');
};

const deleteMovies = async (e) => {
    e.preventDefault();

    await deleteMovie(movieId);
    
    navigate('/movies');
    
};


    return (
        <>
        <Navbar expand="lg">
                <Container>
                    <Navbar.Brand href="/">
                        <img
                        alt=""
                        src="https://react-bootstrap.github.io/logo.svg"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        />{' '}
                            React Movie App
                    </Navbar.Brand>
                </Container>
        </Navbar>
         <Container>
                <Row>
                    <Col className="col-md-2" >      
                      <Sidebar />
                    </Col>
                    <Col  className="col-md-10" >
                        <div>
                            
                                
                                {status === "loading" ? (
                                    <Spinner>Loading...</Spinner>
                                ) : (
                                    <div>
                                    <Button variant="primary" onClick={editMovie}>Edit</Button>{' '}
                                    <Button variant="danger" onClick={deleteMovies}>Delete</Button>{' '}
                                    <h1>{movie.original_title}</h1>
                                    <h2>{movie.tagline}</h2>
                                    <h2>{movie.genres}</h2>
                                    <img src={movie.poster_path}></img>
                                    </div>
                                )}
                            
                            </div>
                    </Col> 
                </Row>

            </Container>
        </>
        );
    };


export default Movie; 