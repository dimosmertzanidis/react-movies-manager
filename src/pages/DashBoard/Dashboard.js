import {React, useEffect} from "react";
import {Col, Container, Row, Navbar} from "react-bootstrap";
import Sidebar from "../SideBar/SideBar";

const DashBoard = props => {

    useEffect( () => {});

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
                        
                    </Col> 
                </Row>

            </Container>
        </>
        );
    };

export default DashBoard; 