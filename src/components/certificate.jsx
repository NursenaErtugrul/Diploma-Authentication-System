import React, { Component } from "react";
import { Button } from "react-bootstrap";
import "../certstyle.css";

import printJs from "print-js";

class Certificate extends Component {
  state = {};
  onclickprint = event => {
    event.preventDefault();
    window.print();
    printJs("printcertificate", "html");
  };
  render() {
    return (
      <div className="w-100 pc ">
        <div id="printcertificate" className="w-75 cert outline-info">
          <div id="fname">
            <span>{this.props.sname}</span>
          </div>
          <div id="departman">
            <style>{`@media print {#departman{color:red;}}`}</style>
            <span>{this.props.departman} </span>
          </div>
          <div id="snumber">
            <style>{`@media print {#snumber{color:red;}}`}</style>
            <span>{this.props.snumber} </span>
          </div>
          <div id="txh">
            <span>{this.props.txh}</span>
          </div>
          <div id="id">
            <span>{this.props.id}</span>
          </div>
        </div>
      </div>
    );
  }
}
export default Certificate;
