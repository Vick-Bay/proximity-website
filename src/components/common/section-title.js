import React, { Component } from "react";
import { Row, Col } from "reactstrap";

class SectionTitle extends Component {
  render() {
    return (
      <React.Fragment>
        <Row className="justify-content-center">
          <Col lg={6}>
            <div className="text-center mb-3">
              <h2 className="text-uppercase small-title">
                {this.props.subtitle}
              </h2>
              <p className="mb-1 subtitle">{this.props.title}</p>
            </div>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default SectionTitle;
