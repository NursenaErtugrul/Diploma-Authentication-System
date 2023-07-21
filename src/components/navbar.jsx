import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../nav.css";
import "../backgrnd.css";
class Navhead extends Component {
  state = {};
  render() {
    return (
      
      <Navbar className="bar" bg="light" variant="light">
          <h5> DIPLOMA <br /> AUTHENTIFICATION  SYSTEM</h5>
           
        <Navbar.Toggle aria-controls="basic-navbar-nav"  />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className=" mr-5 ml-5">
            <Nav.Item className="mr-5 ml-5 ">
              <Link to="/"><h4>Home</h4></Link>
            </Nav.Item>
            <Nav.Item className=" ml-5 mr-5">
              <Link to="/verify"> <h4>Verify</h4></Link>
            </Nav.Item>
            <Nav.Item className=" mr-5 ml-5">
              <Link to="/view"> <h4>View Diploma</h4></Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
export default Navhead;
