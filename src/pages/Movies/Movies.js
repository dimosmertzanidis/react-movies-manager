import {React} from "react";
import {Col, Container, Row, Navbar} from "react-bootstrap";
import {Card, CardBody, CardTitle, CardSubtitle, CardImg} from "reactstrap"
import Sidebar from "../SideBar/SideBar";
import {getMovies} from '../../api/movies';
import {useQuery} from 'react-query'
import { Link } from "react-router-dom";
import './Movies.css' 

const Movies = props => {

    const { status, data: movies } = useQuery("movies", getMovies);

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
                    <div className="movies-cards">
                        Movies
                        {movies?.map(({ id, title, tagline, backdrop_path }) => (
                        <Link to={`/movie/${id}`} className="normal-text">
                            <Card className="movie-card">
                                <CardImg
                                src={backdrop_path}
                                top
                                width="100%"    
                                />
                                <CardBody>
                                <CardTitle tag="h5">
                                    {title}
                                </CardTitle>
                                <CardSubtitle className="mb-2 text-muted" tag="h6">
                                    {tagline}
                                </CardSubtitle>
                                </CardBody>
                            </Card>
                        </Link>
                        ))}
                    </div>
                    </Col> 
                </Row>

            </Container>
        </>
        );
    };

export default Movies; 