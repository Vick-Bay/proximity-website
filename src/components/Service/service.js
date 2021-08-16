import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

//Import Section Title
import SectionTitle from "../common/section-title";

//Import Images
import service from "../../assets/images/service.jpg";

class Process extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="section bg-white" id="services">
          <Container>
            <SectionTitle
              subtitle="How we do it"
              title="We use data-driven creativity to solve business problems"
            />
            <Row
              className="mt-4 pb-5"
              style={{
                position: "relative",
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "center",
              }}
            >
              <Col lg={12}>
                <img
                  src={service}
                  alt="service"
                  className="img-fluid mx-auto d-block"
                />
              </Col>
              <Row
                style={{
                  backgroundColor: "#fff",
                  position: "absolute",
                  zIndex: "100",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flex: 1,
                  width: "70%",
                  height: "30%",
                }}
              >
                <p className="service-para">
                  By harnessing powerful insights and smart targeting, we're
                  able to create behaviour-changing ideas and experiences that
                  deliver value to brands. Supported by our proprietary{" "}
                  <u>Creative Intelligence process</u>, <u>unique tools</u> and{" "}
                  <u>global partners</u>, we are able to put data at the heart
                  of everything we do to orchestrate experiences that deliver
                  creativity with precision and purpose
                </p>
              </Row>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default Process;
