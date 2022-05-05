import React from "react";
import {Nav} from "react-bootstrap";

const SideBar = props => {
   

    return (
        <>
    
            <Nav className=" d-none d-md-block sidebar"
            activeKey="/"
            >
            <Nav.Item>
                <Nav.Link href="/DashBoard">DashBoard</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="/Movies">Movies</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="/Movies">Add new movie</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="/Actors">Actors</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="/Actors">Add new actor</Nav.Link>
            </Nav.Item>
            </Nav>
          
        </>
        );
  };
  export default SideBar;