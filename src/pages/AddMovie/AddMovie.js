import {React, useState} from "react";
import {Col, Container, Row, Navbar} from "react-bootstrap";
import Sidebar from "../SideBar/SideBar";
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';
import {createMovie} from '../../api/movies'

const DashBoard = props => {
    const [movieForm, setMovieForm] = useState({
            "id": 0,
            "title": "",
            "tagline": "",
            "overview": "",
            "vote_average": 0,
            "homepage": "",
            "poster_path":
            ""
    });
    const {id, title, tagline, overview, vote_average, homepage, poster_path} = movieForm;
    const changeHandler = (event) => {
        event.preventDefault();
        setMovieForm({...movieForm, [event.target.name] : event.target.value});

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
                        <Form >
                        <FormGroup>
                            <Label for="id">Id</Label>
                            <Input name="id" id="id" value={id} onChange={changeHandler}required/>
                            </FormGroup>
                            <FormGroup>
                            <Label for="title">Title</Label>
                            <Input name="title" id="title" value={title} onChange={changeHandler}required/>
                            </FormGroup>
                            <FormGroup>
                            <Label for="tagLine">Tagline</Label>
                            <Input name="tagline" id="tagline" value={tagline} onChange={changeHandler}required/>
                            </FormGroup>
                            <FormGroup>
                            <Label for="overview">Overview</Label>
                            <Input type="textarea" name="overview" id="overview" value={overview} onChange={changeHandler} required/>
                            </FormGroup>
                            <FormGroup>
                                <Label for="voteAverage">Number</Label>
                                <Input type="number" name="vote_average" id="vote_average" value={vote_average} onChange={changeHandler} required/>
                            </FormGroup>
                            <FormGroup>
                            <Label for="homepage">Homepage</Label>
                            <Input name="homepage" id="homepage" value={homepage} onChange={changeHandler}/>
                            </FormGroup> 
                            <FormGroup>
                            <Label for="posterPath">Poster Path</Label>
                            <Input name="poster_path" id="poster_path" value={poster_path} onChange={changeHandler}/>
                            </FormGroup>                             
                            <Button onClick={(e) => createMovie(movieForm)}>Submit</Button>
                        </Form>
                    </div>
                    </Col> 
                </Row>
            </Container>
        </>
        );
    };

export default DashBoard; 