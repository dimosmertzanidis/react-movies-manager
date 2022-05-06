import {React} from "react";
import {Col, Container, Row, Navbar} from "react-bootstrap";
import Sidebar from "../SideBar/SideBar";
import {getMovies} from '../../api/movies';
import {useQuery} from 'react-query'
import { Table, Spinner } from "reactstrap";
import { Link } from "react-router-dom";

const DashBoard = props => {

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
                    <div>
      <h1>Dashboard</h1>
      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Release Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {status === "loading" ? (
            <Spinner>Loading...</Spinner>
          ) : (
            movies?.map(({ id, title, release_date }) => (
              <tr key={id}>
                <th scope="row">{id}</th>
                <td>{title}</td>
                <td>{release_date}</td>
                <td>
                  <Link to={`/movies/${id}`}>View movie</Link>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </Table>
    </div>
                    </Col> 
                </Row>

            </Container>
        </>
        );
    };

export default DashBoard; 