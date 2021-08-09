import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "reactstrap";
import FeatherIcon from "feather-icons-react";

class FeatureBox extends Component {
  render() {
    return (
      <React.Fragment>
        <h5>{this.props.title}</h5>
        <p className="mb-4">{this.props.desc}</p>
        <Link to={this.props.link}>Find out here</Link>
      </React.Fragment>
    );
  }
}

export default FeatureBox;
