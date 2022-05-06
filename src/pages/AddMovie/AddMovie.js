import {React} from "react";
import {Col, Container, Row, Navbar} from "react-bootstrap";
import Sidebar from "../SideBar/SideBar";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const DashBoard = props => {

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
                        <Form>
                            <FormGroup>
                            <Label for="title">Title</Label>
                            <Input name="title" id="title" required/>
                            </FormGroup>
                            <FormGroup>
                            <Label for="tagLine">Tagline</Label>
                            <Input name="tagLine" id="tagLine" required/>
                            </FormGroup>
                            <FormGroup>
                            <Label for="overview">Overview</Label>
                            <Input type="textarea" name="overview" id="overview" required/>
                            </FormGroup>
                            <FormGroup>
                                <Label for="voteAverage">Number</Label>
                                <Input type="number" name="voteAverage" id="voteAverage" placeholder="0" required/>
                            </FormGroup>
                            <FormGroup>
                            <Label for="homepage">Homepage</Label>
                            <Input name="homepage" id="homepage"/>
                            </FormGroup> 
                            <FormGroup>
                            <Label for="posterPath">Poster Path</Label>
                            <Input name="posterPath" id="posterPath"/>
                            </FormGroup>                             
                            <Button>Submit</Button>
                        </Form>
                    </div>
                    </Col> 
                </Row>
            </Container>
        </>
        );
    };

export default DashBoard; 