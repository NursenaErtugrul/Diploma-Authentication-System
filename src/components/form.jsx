import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import "../backgrnd.css";
class Forms extends Component {
  canBeSubmitted() {
    const { fname, lname, departman, snumber} = this.state;
    return (
      fname.length > 0 &&
      lname.length > 0 &&
      snumber.length > 0 &&
      departman.length > 0

    );
  }
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  addcertificate = event => {
    event.preventDefault();
    this.props.addcertificate(this.state);
  };

  state = {
    fname: "",
    lname: "",
    departman: "",
    snumber: ""
  };
  render() {
    const isEnabled = this.canBeSubmitted();
    return (
      <div
        className="container-fluid "
        style={{
          height: "100vh%",
          backgroundSize: "cover"
        }}
      >
        <h1
          style={{
            fontFamily: "Montserrat",
            fontWeight: "bold",
            fontSize: "60px",
            color: "#025441"
          }}
          className="mb-5 pt-3"
        >
          Create A Diploma
        </h1>
        <div
          style={{ marginBottom: "117px", background: "rgb(255,255,255,0.5)" }}
          className="w-50 container pt-3 pb-3 mx-auto"
        >
          <h2
            style={{
              color:"#751695",
              fontWeight: "bold",
              fontFamily: "Montserrat"
              
            }}
            className="mb-2"
          >
            Enter the Diploma Details
          </h2>
          <Form onSubmit={this.addcertificate}>
            <Form.Group>
              <Form.Control
                type="text"
                name="fname"
                value={this.state.fname}
                onChange={this.handleChange}
                placeholder="First Name"
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="text"
                name="lname"
                value={this.state.lname}
                onChange={this.handleChange}
                placeholder="Last Name"
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="text"
                name="snumber"
                value={this.state.snumber}
                onChange={this.handleChange}
                placeholder="Terms Years"
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="text"
                name="departman"
                value={this.state.departman}
                onChange={this.handleChange}
                placeholder="Department Name"
              />
            </Form.Group>
            <Button
              disabled={!isEnabled}
              className="mt-3 "
              variant="outline-success"
              type="submit"
            >
              Add Diploma
            </Button>
          </Form>
        </div>
      </div>
    );
  }
}
export default Forms;
